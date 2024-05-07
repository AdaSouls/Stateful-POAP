-- Extend the schema to fit your needs
CREATE TYPE poap_type AS ENUM ('poap', 'soulbound', 'consensual');

-- verify ownership of the poap from cde-access.ts
-- check if it exists (contract address + id)
CREATE TABLE poaps (
  address TEXT NOT NULL,
  nft_id TEXT NOT NULL,
  type poap_type NOT NULL,
  PRIMARY KEY (address, nft_id)
);
