/* 
  @name createIssuer
*/
INSERT INTO issuers(
  "issuerId",
  address)
VALUES (
  :issuerId!,
  :address!
);

/* 
  @name createEvent
*/
INSERT INTO events(
  "eventId",
  "issuerId",
  "eventMaxSupply",
  "eventMintExpiration",
  "eventOrganizer",
  "eventMetadata")
VALUES (
  :eventId!,
  :issuerId!,
  :eventMaxSupply!,
  :eventMintExpiration!,
  :eventOrganizer!,
  :eventMetadata!
);

/* 
  @name createPoap
*/
INSERT INTO poaps(
  address,
  "eventId",
  instance,
  "poapType")
VALUES (
  :address!,
  :eventId!,
  :instance!,
  :type!
);
