import type Prando from '@paima/sdk/prando';
import type { SubmittedChainData } from '@paima/sdk/utils';
import type { SQLUpdate } from '@paima/node-sdk/db';
import type { Pool } from 'pg';
export default function (inputData: SubmittedChainData, _blockHeight: number, _randomnessGenerator: Prando, dbConn: Pool): Promise<SQLUpdate[]>;
