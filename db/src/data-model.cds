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
    @sap.hierarchy.node.for: 'NodeID'
    @edmanno.StoreGeneratedPattern: 'Identity'
    key NodeID : Integer;
    @sap.hierarchy.level.for: 'NodeID'
    HierarchyLevel        : Integer;
    Description : String;
    @sap.hierarchy.parent.node.for: 'NodeID'
    ParentNodeID               : Integer default null;
    @sap.hierarchy.drill.state.for: 'NodeID'
    DrillState             : String default 'expanded';
                               
}

entity Menu {
    key ID : Integer; // menu code
    menuName             : String;
    subheader : String;
    footer: String;
    icon : String;          
}