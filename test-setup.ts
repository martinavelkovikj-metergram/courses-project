import { createConnection, ConnectionOptions } from 'typeorm';
import { Course } from './src/model/course'; // Import the Course entity here

export const createTestConnection = async () => {
  const connectionOptions: ConnectionOptions = {
    type: 'sqlite', 
    database: ':memory:',
    entities: [Course], 
    synchronize: true, 
    logging: false, 
  };

  try {
    const connection = await createConnection(connectionOptions);
    return connection;
  } catch (error) {
    console.error('Error creating test connection:', error);
    throw error;
  }
};