"use strict";
import { DataTypes, Model, Sequelize } from "sequelize";

interface SeatAttributes {
  seatID: number;
  eventID: number;
  rowNum?: string;
  seatNum?: number;
  status?: boolean;
}

class Seat extends Model<SeatAttributes> {
  public seatID!: number;
  public eventID!: number;
  public rowNum?: string;
  public seatNum?: number;
  public status?: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static associate(models: any) {
    this.hasOne(models.Ticket, {
      foreignKey: 'seatID',
      as: 'seatTicket'
    });
    this.belongsTo(models.Event, { foreignKey: 'eventID' });
  }
}

export const initSeatModel = (sequelize: Sequelize) => {
  Seat.init(
    {
      seatID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eventID: { allowNull: false, type: DataTypes.INTEGER },
      rowNum: DataTypes.STRING,
      seatNum: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "seat",
    }
  );

  return Seat;
};

export { Seat };
