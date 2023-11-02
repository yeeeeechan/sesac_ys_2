function Orders(sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
    },
    {
      tableName: "orders",
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = Orders;

// 보통 foreign key가 설정되어 있는 경우 join
