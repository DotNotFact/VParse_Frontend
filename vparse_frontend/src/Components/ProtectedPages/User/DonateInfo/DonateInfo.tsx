import "./DonateInfo.css";

export const DonateInfo = () => {
  return (
    <div className="maxWidth donateInfo-wrapper">
      <div className="p-1 maxWidth donateInfo-container">
        <p>Информация о донате</p>

        <div className="donateInfo-cards">
          <div className="donateInfo-card">
            <div className="donateInfo-card-top">
              <p>Базовый</p>
              <img src="./Pictures/StarFilled.svg" alt="starfilled" />
            </div>

            <hr />

            <div className="donateInfo-card-center">
              <p>Тариф</p>
              <label>• 100 свайпов/день</label>
              <label>• 10 закладок</label>
            </div>

            <div className="donateInfo-card-bottom">
              <p>Бесплатно</p>
              <label>Куплено</label>
            </div>
          </div>

          <div className="donateInfo-card">
            <div className="donateInfo-card-top">
              <p>Вип</p>
              <img src="./Pictures/Star.svg" alt="star" />
            </div>

            <hr />

            <div className="donateInfo-card-center">
              <p>Тариф</p>
              <label>• 200 свайпов/день</label>
              <label>• 20 закладок</label>
            </div>

            <div className="donateInfo-card-bottom">
              <p>300 рублей</p>
              <TelegramButton buttonText="Купить" />
            </div>
          </div>

          <div className="donateInfo-card">
            <div className="donateInfo-card-top">
              <p>Супер-Вип</p>
              <img src="./Pictures/Star.svg" alt="star" />
            </div>

            <hr />

            <div className="donateInfo-card-center">
              <p>Тариф</p>
              <label>• 500 свайпов/день</label>
              <label>• 50 закладок</label>
            </div>

            <div className="donateInfo-card-bottom">
              <p>800 рублей</p>
              <TelegramButton buttonText="Купить" />
            </div>
          </div>

          {/*<div className="donateInfo-card">*/}

          {/*    <div className="donateInfo-card-top">*/}
          {/*        <p>Безлимит</p>*/}
          {/*        <AiOutlineStar />*/}
          {/*    </div>*/}

          {/*    <hr />*/}

          {/*    <div className="donateInfo-card-center">*/}
          {/*        <p>Тариф</p>*/}
          {/*        <label>• ∞︎ свайпов/день</label>*/}
          {/*    </div>*/}

          {/*    <div className="donateInfo-card-bottom">*/}
          {/*        <p>1500 рублей</p>*/}
          {/*        <TelegramButton buttonText="Купить" teleramText="Безлимит" />*/}
          {/*    </div>*/}

          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

// Получиться ли?
export const TelegramButton = ({ buttonText }: { buttonText: string }) => {
  const url = `https://web.telegram.org/a/#702091274`;

  return <a href={url}>{buttonText}</a>;
};
