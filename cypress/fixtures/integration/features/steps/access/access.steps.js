import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import AccessPage from '../../../../pages/access.page';

Given(`Eu acesso a pagina principal da VR`, () => {
    AccessPage.visit();
});
And(`Navego até a seção “Pra Você̂”`, () => {
    AccessPage.forYou();
});
When(`Clico no botão “Onde usar meu cartão VR”`, () => {
    AccessPage.localUse();
});
Then(`Sou direcionado para tela do mapa do Google`, () => {
    AccessPage.assertsInPage();
});