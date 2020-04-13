import React from "react";
import PropTypes from "prop-types";
import { Input, Empty, Spin } from "antd";
import classNames from "classnames";

import { UsersItem } from "components";
import "./Users.scss";

const Users = ({ items, onSearch, inputValue, isLoading }) => (
    <div className="users">
        <div className="users__search">
            <Input.Search
                placeholder="Поиск среди пользователей"
                onChange={e => onSearch(e.target.value)}
                value={inputValue}
            />
        </div>
        <div
            className={classNames("users__items", {
                "users__items--loading": isLoading
            })}
        >
            {isLoading && !items.length ? (
                <div className="example">
                    <Spin size="large" />
                </div>
            ) : items.length ? (
                items.map(item => (
                    <UsersItem key={item._id} fullname={item.fullname} />
                ))
            ) : (
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Никого нет в сети"
                />
            )}
        </div>
    </div>
);

Users.propTypes = {
    items: PropTypes.array,
    onSearch: PropTypes.func,
    value: PropTypes.string
};

export default Users;
