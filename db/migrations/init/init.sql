-- Extend the schema to fit your needs
CREATE TYPE poap_type AS ENUM ('poap', 'soulbound', 'consensual');

-- verify ownership of the poap from cde-access.ts
-- check if it exists (contract address + id)
CREATE TABLE owners (
  "uuid" VARCHAR(255) NOT NULL UNIQUE , 
  "address" VARCHAR(255) UNIQUE, 
  "email" VARCHAR(255) UNIQUE, 
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  PRIMARY KEY ("uuid"));

CREATE TABLE events (
  "eventId" VARCHAR(255) NOT NULL UNIQUE , 
  "title" VARCHAR(255) NOT NULL, 
  "description" VARCHAR(255) NOT NULL, 
  "city" VARCHAR(255), 
  "country" VARCHAR(255), 
  "startDate" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "endDate" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "expiryDate" TIMESTAMP WITH TIME ZONE, 
  "year" INTEGER, 
  "eventUrl" VARCHAR(255), 
  "virtualEvent" BOOLEAN NOT NULL, 
  "image" VARCHAR(255) NOT NULL, 
  "secretCode" VARCHAR(255), 
  "eventTemplateId" VARCHAR(255), 
  "email" VARCHAR(255) NOT NULL, 
  "requestedCodes" INTEGER NOT NULL, 
  "privateEvent" VARCHAR(255) NOT NULL, 
  "purpose" VARCHAR(255), 
  "platform" VARCHAR(255), 
  "eventType" VARCHAR(255), 
  "amountOfAttendees" INTEGER, 
  "account" VARCHAR(255), 
  "poapType" poap_type NOT NULL, 
  "poapsToBeMinted" INTEGER NOT NULL, 
  "mintedPoaps" INTEGER NOT NULL, 
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "ownerId" VARCHAR(255) REFERENCES "owners" ("uuid") ON DELETE SET NULL ON UPDATE CASCADE, 
  PRIMARY KEY ("eventId"));

CREATE TABLE poaps (
  "uuid" VARCHAR(255) NOT NULL UNIQUE , 
  "poap" VARCHAR(255) NOT NULL,
  "poapType" poap_type NOT NULL,
  "smartContract" VARCHAR(255) NOT NULL, 
  "instance" INTEGER NOT NULL UNIQUE, 
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, 
  "ownerId" VARCHAR(255) REFERENCES "owners"("uuid") ON DELETE SET NULL ON UPDATE CASCADE, 
  "eventId" VARCHAR(255) REFERENCES "events"("eventId") ON DELETE SET NULL ON UPDATE CASCADE, 
  PRIMARY KEY ("uuid"));
