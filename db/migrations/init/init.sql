-- Extend the schema to fit your needs
CREATE TYPE poap_type AS ENUM ('poap', 'soulbound', 'consensual');

-- verify ownership of the poap from cde-access.ts
-- check if it exists (contract address + id)
CREATE TABLE owners (
  "uuid" VARCHAR(255) NOT NULL UNIQUE, 
  "address" VARCHAR(255) UNIQUE, 
  "email" VARCHAR(255) UNIQUE, 
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()), 
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()), 
  PRIMARY KEY ("uuid"));

CREATE TABLE issuers (
  "issuerId" INTEGER NOT NULL UNIQUE,
  "address" VARCHAR(255) UNIQUE, 
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()),
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()),
  PRIMARY KEY ("issuerId"));

CREATE TABLE events (
  "eventId" INTEGER NOT NULL UNIQUE, 
  "issuerId" INTEGER NOT NULL UNIQUE,
  "title" VARCHAR(255), 
  "description" VARCHAR(255), 
  "city" VARCHAR(255), 
  "country" VARCHAR(255), 
  "startDate" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "endDate" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "expiryDate" TIMESTAMP WITH TIME ZONE, 
  "eventMaxSupply" INTEGER, 
  "eventMintExpiration" INTEGER,
  "eventOrganizer" VARCHAR(255),
  "eventMetadata" VARCHAR(255),
  "eventUrl" VARCHAR(255), 
  "virtualEvent" BOOLEAN, 
  "image" VARCHAR(255), 
  "secretCode" VARCHAR(255), 
  "eventTemplateId" VARCHAR(255), 
  "email" VARCHAR(255), 
  "requestedCodes" INTEGER, 
  "privateEvent" VARCHAR(255), 
  "purpose" VARCHAR(255), 
  "platform" VARCHAR(255), 
  "eventType" VARCHAR(255), 
  "amountOfAttendees" INTEGER, 
  "account" VARCHAR(255), 
  "poapType" poap_type NOT NULL, 
  "poapsToBeMinted" INTEGER NOT NULL, 
  "mintedPoaps" INTEGER NOT NULL, 
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()), 
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()), 
  PRIMARY KEY ("eventId"));

CREATE TABLE poaps (
  "uuid" VARCHAR(255) NOT NULL UNIQUE, 
  "poap" VARCHAR(255) NOT NULL,
  "poapType" poap_type NOT NULL,
  "address" VARCHAR(255) NOT NULL, 
  "instance" INTEGER NOT NULL UNIQUE, 
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()), 
  "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT(now()),
  "eventId" INTEGER NOT NULL UNIQUE REFERENCES "events" ("eventId") ON DELETE SET NULL ON UPDATE CASCADE, 
  "issuerId" INTEGER NOT NULL UNIQUE REFERENCES "issuers" ("issuerId") ON DELETE SET NULL ON UPDATE CASCADE, 
  PRIMARY KEY ("uuid"));
