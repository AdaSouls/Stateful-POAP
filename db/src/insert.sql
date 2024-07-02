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
  "title",
  "description",
  "city",
  "country",
  "startDate",
  "endDate",
  "expiryDate",
  "eventMaxSupply",
  "eventMintExpiration",
  "eventOrganizer",
  "eventMetadata",
  "eventUrl", 
  "virtualEvent", 
  "image", 
  "secretCode", 
  "eventTemplateId", 
  "email", 
  "requestedCodes", 
  "privateEvent", 
  "purpose", 
  "platform", 
  "eventType", 
  "amountOfAttendees", 
  "account", 
  "poapType", 
  "poapsToBeMinted", 
  "mintedPoaps"
) 
VALUES (
  :eventId!,
  :issuerId!,
  'testing event',
  'testinv event description',
  'buenos aires',
  'argentina',
  now(),
  now(),
  NULL,
  :eventMaxSupply!,
  :eventMintExpiration!,
  :eventOrganizer!,
  :eventMetadata!,
  'eventUrl',
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  NULL,
  'poap',
  100,
  0
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
