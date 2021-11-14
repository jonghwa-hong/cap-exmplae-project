using my.bookshop as my from '../../db/src/data-model';

@path: 'service/hierarchyService'
service hierarchyService {
    // Hierarchy
    @Capabilities : {Deletable : false}
    entity Hierarchy as projection on my.Hierarchy
}

annotate hierarchyService.Hierarchy with @(
  UI: {
    LineItem: [
      {Value: NodeID, Label: 'node id'},
      {Value: HierarchyLevel, Label:'hierarchy level'},
      {Value: Description},
      {Value: ParentNodeID},
      {Value: DrillState, Label:' '},
    ],
  }
);