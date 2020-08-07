import db from '../database/connection';
import { Request, Response } from 'express';
import { convertHoursToMinutes } from '../utils/convertHoursToMinutes';


interface ISchedule {
  week_day: number;
  from: string;
  to: string;
}

class ClassesController {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res.status(400).json({
        message: 'Missing one or more filters.'
      });
    }

    const timeInMinutes = convertHoursToMinutes(time);

    const classes  = await db('classes')
      .whereExists(function() {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

    const trx = await db.transaction();

    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
  
      const [class_id] = await trx('classes').insert({
        user_id,
        cost,
        subject,
      });
      
      const classesScheuled = schedule.map((period: ISchedule) => ({
        class_id,
        week_day: period.week_day,
        from: convertHoursToMinutes(period.from),
        to: convertHoursToMinutes(period.to)
      }));
  
      await trx('class_schedule').insert(classesScheuled);
      
      await trx.commit();
  
      return res.json({
        success: true,
        user_id,
      });
    } catch(err) {
      return res.status(400).json({
        success: false,
        message: 'Unexpected error while creating new class.'
      })
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await db('users').delete().where({ id });

    return res.json({
      success: true,
      user_id: id,
    })
  }
}

export default new ClassesController();
