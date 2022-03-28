export const STAR_RATING = 'star/STAR_RATING';
export const STAR_WIDTH = 'star/STAR_RATING';

const initialState = {
  clickedStarWidth: 0,
  starRate: 0,
};

export const handleStars = (width) => ({ type: STAR_WIDTH, width });
export const handleRating = (rate) => ({ type: STAR_RATING, rate });

export default function star(state = initialState, action) {
  switch (action.type) {
    case STAR_RATING:
      return {
        ...state,
        starRate: Number(action.rate),
      };
    case STAR_WIDTH:
      return {
        ...state,
        clickedStarWidth: Number(action.width),
      };

    default:
      return state;
  }
}
