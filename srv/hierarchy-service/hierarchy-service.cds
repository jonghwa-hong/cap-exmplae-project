using my.bookshop as my from '../../db/src/data-model';

@path: 'service/catalog'
service hierarchyService {
    // Hierarchy
    @Capabilities : {Deletable : false}
    entity Hierarchy as projection on my.Hierarchy
}