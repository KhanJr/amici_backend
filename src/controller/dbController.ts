import { dbConnect } from '@src/services/dbConnection';
import { endPoints } from '@src/config/endpoints.config';

export const dbConnection = async (): Promise<void> => {
  const dbConnectionLink: string = endPoints.DB_CONNECT;
  await dbConnect(dbConnectionLink);
};
