import * as SC from "./styles"

export const NotFound = () => {
    return (
        <SC.NotFoundContainer>
            <SC.Title>404</SC.Title>
            <SC.Message>Пользователь не найден</SC.Message>
            <SC.HomeButton to="/">Вернуться на главную</SC.HomeButton>
        </SC.NotFoundContainer>
    );
};