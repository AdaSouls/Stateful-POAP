/*
  @name getUserPoaps
  @param poaps -> (...)
*/
SELECT * FROM poaps 
WHERE nft_id IN :poaps!;