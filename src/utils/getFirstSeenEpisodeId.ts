export const getFirstSeenEpisodeId = (character: { episode: string[]; }) => {
  const epUrlParts = character.episode[0].split('/');

  return +epUrlParts[epUrlParts.length - 1];
};