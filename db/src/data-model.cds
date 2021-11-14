namespace my.bookshop;
using { Country, managed , cuid} from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : localized String;
  author : Association to Authors;
  stock  : Integer;
}

entity Authors {
  key ID : Integer;
  name   : String;
  books  : Association to many Books on books.author = $self;
}

entity Orders : managed {
  key ID  : UUID;
  book    : Association to Books;
  country : Country;
  amount  : Integer;
}

entity Hierarchy {
    key ID : Integer;
    hierarchyName        : String;
    hierarchyDescription : String;
    parent               : Association to Hierarchy;
    children             : Composition of many Hierarchy
                               on children.parent = $self;
}