import React from "react";

export const TypeaheadUserItem = ({user}) => (
    <div>
        <img
            alt={user.login}
            src={user.avatar_url}
            style={{
                height: '24px',
                marginRight: '10px',
                width: '24px',
            }}
        />
        <span>{user.login}</span>
    </div>
);
