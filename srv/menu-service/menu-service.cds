using my.bookshop as my from '../../db/src/data-model';

@path: 'service/menuService'
service menuService {
    entity Menu as projection on my.Menu
}