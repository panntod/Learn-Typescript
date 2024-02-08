'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      ticketID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: 'eventID'
        },
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'userID'
        },
      },
      seatID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'seats',
          key: 'seatID'
        },
      },
      bookedDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tickets');
  }
};