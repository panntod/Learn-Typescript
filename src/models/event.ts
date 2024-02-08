'use strict';
import { DataTypes, Model, Sequelize } from 'sequelize';

interface EventAttributes {
  eventID: number;
  eventName?: string;
  eventDate?: Date;
  venue?: string;
  price?: number;
  image?: string;
}

class Event extends Model<EventAttributes> {
  public eventID!: number;
  public eventName?: string;
  public eventDate?: Date;
  public venue?: string;
  public price?: number;
  public image?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    this.hasMany(models.Seat, {
      foreignKey: 'eventID',
      as: 'eventSeat'
    });
    this.hasMany(models.Ticket, {
      foreignKey: 'eventID',
      as: 'eventTicket'
    });
  }
}

export const initEventModel = (sequelize: Sequelize) => {
  Event.init({
    eventID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventName: DataTypes.STRING,
    eventDate: DataTypes.DATE,
    venue: DataTypes.STRING,
    price: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });

  return Event;
};

export { Event };
