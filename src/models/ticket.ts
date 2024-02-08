'use strict';
import { DataTypes, Model, Sequelize } from 'sequelize';

interface TicketAttributes {
  ticketID: number;
  eventID?: number;
  userID?: number;
  seatID?: number;
  bookedDate?: Date;
}

class Ticket extends Model<TicketAttributes> {
  public ticketID!: number;
  public eventID?: number;
  public userID?: number;
  public seatID?: number;
  public bookedDate?: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: 'userID' });
    this.belongsTo(models.Event, { foreignKey: 'eventID' });
    this.belongsTo(models.Seat, { foreignKey: 'seatID' });
  }
}

export const initTicketModel = (sequelize: Sequelize) => {
  Ticket.init({
    ticketID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    eventID: DataTypes.INTEGER,
    userID: DataTypes.INTEGER,
    seatID: DataTypes.INTEGER,
    bookedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ticket',
  });

  return Ticket;
};

export { Ticket };
