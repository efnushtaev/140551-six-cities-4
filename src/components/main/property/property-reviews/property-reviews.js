import React, {useState, useEffect} from 'react';

const PropertyReviews = (props) => {

  const isReviewFormDisabled = true;

  const {userAvatar, isAuth, offerId, loadingComment, postComment, comments} = props;
  const ratingValues = [5, 4, 3, 2, 1];
  const [ratingChecked, setratingChecked] = useState(0);
  const [sumbitStatus, setSubmitStatus] = useState(false);
  const [commentText, setCommentText] = useState(`qwertyqwertyqwertyqwertrtyqwertyqwertyqwertyqwerty1yqwerty1`);
  const commentTextRef = React.createRef();
  const submitRef = React.createRef();
  const MIN_COMMENT_LENGTH = 50;
  const MAX_COMMENT_LENGTH = 300;

  useEffect(() => {
    loadingComment(offerId);
  }, []
  );

  useEffect(() => {
    if (ratingChecked !== 0 && (commentText.length > MIN_COMMENT_LENGTH && commentText.length < MAX_COMMENT_LENGTH)) {
      setSubmitStatus(true);
    } else {
      setSubmitStatus(false);
    }
  }, [ratingChecked, commentText]);

  const handleCommentTextChange = () => {
    const currentCommentText = commentTextRef.current.value;
    setCommentText(currentCommentText);
  }

  const handleratingStarUpdate = (value) => {
    setratingChecked(value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    postComment(commentText, ratingChecked, offerId)
    setCommentText(``);
    setratingChecked(0);
  }

  const _getDate = (date) => {
    const monthList = [`January`, `February`, `March`, `April`, `May`, `June`, 
      `July`, `August`, `September`, `October`, `November`, `December`]
    let dateParse = new Date(date)
    let month = monthList[dateParse.getMonth()]
    let year = dateParse.getFullYear()
    return `${month} ${year}`
  }

  return <section className="property__reviews reviews">
    {comments
    
      ? <>
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {comments.map((el) => {
            return <li key={el.id} className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img className="reviews__avatar user__avatar" src={el.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
                </div>
                <span className="reviews__user-name">
                  {el.user.name}
                </span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">{el.rating}</span>
                  </div>
                </div>
                <p className="reviews__text">
                {el.comment}
                </p>
                <time className="reviews__time" dateTime={el.date}>{_getDate(el.date)}</time>
              </div>
            </li>;
          })}
        </ul>
      </>
      : <span>loading...</span>
    }
    {isAuth
      ? <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" forHtml="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingValues.map((el) => {
            return <>
              <input key={el} className="form__rating-input visually-hidden" name="rating" value={el} id={`${el}-stars`}
                type="radio" checked={el === ratingChecked ? true : false}/>
              <label onClick={() => handleratingStarUpdate(el)} forHtml={`${el}-stars`}
                className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </>;
          })}
        </div>
        <textarea value={commentText} onChange={() => handleCommentTextChange()} ref={commentTextRef} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
          </p>
          <button ref={submitRef} onClick={(e) => handleSubmitClick(e)} className="reviews__submit form__submit button" type="submit" disabled={!sumbitStatus}>Submit</button>
        </div>
      </form>
      : null
    }
  </section>;
};

export default PropertyReviews;
