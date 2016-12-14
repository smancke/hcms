package main

import (
	"time"
)

type Filter struct {
	// The project or workspace, an item belongs to
	ProjectID string

	// The id of an item
	ItemID string

	// The tech name
	TechName string

	// Include more than the latest revisions
	IncludeOldRevisions bool

	// Include Items, which are not published
	IncludeUnpublished bool

	// Return only those items, which are Published withing the given time
	UpdatedSince time.Time

	// List of Subtypes to return
	SubTypeNames []string

	// limit the number of returned items
	// Limit == 0 means unlimited
	Limit int

	// The offset to start with
	Offset int

	// Items, which are created or changed since a specific time.
	UpdatedSince time.Time

	// A query, evaluated on the searchable attributes
	AttributeQuery string

	// A query, evaluated on the searchable meta data attributes
	MetaDataAttributeQuery string
}

type ReadRepository interface {

	// Returns the Item data
	ItemData(ItemHandle) (data []byte, found bool, err error)

	// Returns the Item Meata Data
	ItemMeta(ItemHandle) (meta ItemMeta, found bool, err error)

	// Return the items described by the filter
	Items(Filter) (result chan ItemHandle, totalCount int, err error)

	// Return a type description
	TypeDescription(projectID string, typeName string) (TypeDescription, error)

	// Return all Items, which are referencing the supplied item
	Referencing(ItemHandle) (chan Reference, error)
}

type WriteRepository interface {
}
