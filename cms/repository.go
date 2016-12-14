package cms

type Filter struct {
	// The id of an item
	ItemID string

	// The collection, the Item belongs to
	Collection string

	// The tech name
	TechName string

	// Include Items, which are not published
	IncludeUnpublished bool

	// List of Subtypes to return
	ItemTypes []string

	// limit the number of returned items
	// Limit == 0 means unlimited
	Limit int

	// The offset to start with
	Offset int
}

type ReadRepository interface {
	// Returns the Item
	Item(projectId, id string) (item Item, found bool, err error)

	// Return the items described by the filter
	Items(projectId string, filter Filter) (result chan Item, err error)
}

type WriteRepository interface {
	// Returns the Item
	PutItem(projectId, id string, item Item) (err error)

	// Returns the Item
	DeleteItem(projectId, id string) (err error)
}

type Repository interface {
	ReadRepository
	WriteRepository
}
