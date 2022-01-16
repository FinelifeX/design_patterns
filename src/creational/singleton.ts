import { sleep } from "utils/sleep";

abstract class DatabaseDriver {
  abstract connect(): Promise<unknown>;
}

class MongoDriver extends DatabaseDriver {
  async connect() {
      console.log('Connecting to Mongo Database cluster...');
      await sleep();
      console.log('Successfully connected to Mongo Database cluster!');
  }
}

class MySqlDriver extends DatabaseDriver {
  async connect() {
    console.log('Connecting to MySQL Database cluster...');
    await sleep();
    console.log('Successfully connected to MySQL Database cluster...');
  }
}

class DatabaseConnectionManager {
  public static instance: DatabaseConnectionManager;

  driver: DatabaseDriver;

  private constructor(driver: DatabaseDriver) {
    this.driver = driver;
  }

  public static getInstance(driver?: DatabaseDriver): DatabaseConnectionManager {
    if (!DatabaseConnectionManager.instance) {
      if (!driver) throw new Error('Driver must be defined when instantiating DatabaseConnectionManager!');

      DatabaseConnectionManager.instance = new DatabaseConnectionManager(driver);
    }

    return DatabaseConnectionManager.instance;
  }
}

const dbcm = DatabaseConnectionManager.getInstance(new MongoDriver());

dbcm.driver.connect();

const dbcmDuplicate = DatabaseConnectionManager.getInstance(new MySqlDriver());

dbcmDuplicate.driver.connect();