/*
  @name getUserPoaps
  @param poaps -> (...)
*/
SELECT * FROM poaps 
WHERE instance IN :poaps!;