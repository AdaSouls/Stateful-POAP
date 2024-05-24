/* 
  @name createPoap
*/
INSERT INTO poaps(
  smartContract,
  instance,
  poapType)
VALUES (
  :address!,
  :nft_id!,
  :type!
);
