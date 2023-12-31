﻿import {
  IFilterProps,
  ISidebarRightProps,
} from "../../../../../models/IHeader";
import { useQueryClient } from "react-query";
import { useContext, useReducer } from "react";
import "./SidebarRight.css";
import reducer from "../../../../TestComponent/reducer";
import FilterContext from "../../../../TestComponent/FilterContext";

export const SidebarRight = ({
  handleSidebarRight,
  isRight,
}: ISidebarRightProps) => {
  const queryClient = useQueryClient();
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilterChange = (key: string, value: string) => {
    const newFilter: IFilterProps = { ...filter, [key]: value };
    setFilter(newFilter);
  };

  const toggleApplyFilters = () => {
    queryClient.invalidateQueries(["search", filter], {
      exact: true,
    });
    handleSidebarRight();
  };

  // const [filter, dispatchFilter] = useReducer(reducer, initialFilter);

  // const toggleApplyFilters = () => {
  //   queryClient.invalidateQueries(["search", filter], {
  //     exact: true,
  //   });
  //   handleSidebarRight();
  // };

  // const handleFilterChange = (key: string, value: string) => {
  //   dispatchFilter({ type: "edit", key, value });
  // };

  return (
    <div
      className={
        isRight
          ? "maxWidth sidebarRight-wrapper sidebarRight-active"
          : "maxWidth sidebarRight-wrapper"
      }
    >
      <div className="p-1 maxWidth sidebarRight-container">
        <div className="sidebarRight-top">
          <button onClick={handleSidebarRight}>
            <img src="./Pictures/ArrowRight.svg" alt="ArrowRight" />
          </button>
          <p>Фильтр</p>
        </div>

        <hr />

        <div className="sidebarRight-filter">
          <label>Критерии поиска</label>

          <div className="sidebarRight-filterbox">
            <p>Возраст</p>

            <div className="sidebarRight-filterbox-item">
              <input
                type="number"
                inputMode="numeric"
                value={filter.age_from}
                onChange={(e) => {
                  if (e.target.value.length < 3) {
                    handleFilterChange("age_from", e.target.value);
                  } else {
                    e.target.value = e.target.value.slice(0, 2);
                  }
                }}
              />

              <hr />

              <input
                type="number"
                inputMode="numeric"
                value={filter.age_to}
                onChange={(e) => {
                  if (e.target.value.length < 3) {
                    handleFilterChange("age_to", e.target.value);
                  } else {
                    e.target.value = e.target.value.slice(0, 2);
                  }
                }}
              />
            </div>
          </div>

          <div className="sidebarRight-filterbox">
            <p>Сортировка по</p>

            <select
              value={filter.sort}
              onChange={(e) => handleFilterChange("sort", e.target.value)}
            >
              <option value="0">Популярности</option>
              <option value="1">Дате регистрации</option>
            </select>
          </div>

          <div className="sidebarRight-filterbox">
            <p>Пол</p>

            <select
              value={filter.sex}
              onChange={(e) => handleFilterChange("sex", e.target.value)}
            >
              <option value="0">Любой</option>
              <option value="1">Женский</option>
              <option value="2">Мужской</option>
            </select>
          </div>

          {/*<div className="sidebarRight-filterbox">*/}
          {/*    <p>Страна</p>*/}

          {/*    <input*/}
          {/*        type="text"*/}
          {/*        value={city}*/}
          {/*        onChange={(e) => setCity(e.target.value)} />*/}

          {/*</div>*/}

          {/*<div className="sidebarRight-filterbox">*/}
          {/*    <p>Город</p>*/}

          {/*    <input*/}
          {/*        type="text"*/}
          {/*        value={counry}*/}
          {/*        onChange={(e) => setCountry(e.target.value)}*/}
          {/*    />*/}

          {/*</div>*/}

          <div className="sidebarRight-filterbox">
            <p>Семейное положение</p>

            <select
              value={filter.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="" defaultValue="не выбрано" disabled hidden>
                не выбрано
              </option>
              <option value="1">не в отношениях</option>
              <option value="2">есть друг</option>
              <option value="3">помолвлен(a)</option>
              <option value="4">женат/замужем</option>
              <option value="5">всё сложно</option>
              <option value="6">в активном поиске</option>
              <option value="7">влюблен(а)</option>
              <option value="8">в гражданском браке</option>
            </select>
          </div>
        </div>

        <hr />

        <div className="sidebarRight-filter">
          <label>Дополнительно</label>

          <div className="sidebarRight-filterbox">
            <p>Только с фото</p>

            <input
              value={filter.has_photo}
              onChange={(e) =>
                handleFilterChange("has_photo", e.target.checked ? "1" : "0")
              }
              type="checkbox"
            />
          </div>

          <div className="sidebarRight-filterbox">
            <p>Онлайн</p>

            <input
              value={filter.online}
              onChange={(e) =>
                handleFilterChange("online", e.target.checked ? "1" : "0")
              }
              type="checkbox"
            />
          </div>

          <div className="sidebarRight-filterbox">
            <p>Открытые сообщения</p>
            <input
              type="checkbox"
              value={filter.can_write_private_message}
              onChange={(e) =>
                handleFilterChange(
                  "can_write_private_message",
                  e.target.checked ? "1" : "0"
                )
              }
            />
          </div>

          <div className="sidebarRight-filterbox">
            <p>Возможность добавить в друзья</p>
            <input
              type="checkbox"
              value={filter.can_send_friend_request}
              onChange={(e) =>
                handleFilterChange(
                  "can_send_friend_request",
                  e.target.checked ? "1" : "0"
                )
              }
            />
          </div>

          <div className="sidebarRight-filterbox">
            <p>Возможность видеть ваши посты</p>
            <input
              type="checkbox"
              value={filter.can_see_all_posts}
              onChange={(e) =>
                handleFilterChange(
                  "can_see_all_posts",
                  e.target.checked ? "1" : "0"
                )
              }
            />
          </div>
        </div>

        <hr />

        <div className="sidebarRight-filter">
          <label>Исключить если</label>

          <div className="sidebarRight-filterbox">
            <p>Является другом</p>
            <input
              type="checkbox"
              value={filter.is_friend}
              onChange={(e) =>
                handleFilterChange("is_friend", e.target.checked ? "1" : "0")
              }
            />
          </div>

          <div className="sidebarRight-filterbox">
            <p>Общие друзья</p>
            <input
              type="checkbox"
              value={filter.is_friend}
              onChange={(e) =>
                handleFilterChange("is_friend", e.target.checked ? "1" : "0")
              }
            />
          </div>
        </div>

        <button
          onClick={toggleApplyFilters}
          className="sidebarRight-filterbox-btn"
        >
          Применить
        </button>
      </div>
    </div>
  );
};

const initialFilter = {
  age_from: "",
  age_to: "",
  sex: "0",
  sort: "0",
  status: "",
  has_photo: "0",
  online: "0",
  can_write_private_message: "0",
  can_send_friend_request: "0",
  can_see_all_posts: "0",
  is_friend: "0",
  common_count: "0",
};
