package db

import (
	"errors"
	"github.com/smancke/hcms/cms"
)

// Repository implementing the cms.Repository interface
// on top of a sql database.
type Repository struct {
}

func NewRepository() (*Repository, error) {
	return &Repository{}, nil
}

// Returns the Item
func (repo *Repository) Item(projectId, id string) (item cms.Item, found bool, err error) {
	return cms.Item{}, false, errors.New("not implemented")
}

// Return the items described by the filter
func (repo *Repository) Items(projectId string, filter cms.Filter) (result chan cms.Item, err error) {
	return nil, errors.New("not implemented")
}

// Returns the Item
func (repo *Repository) PutItem(projectId, id string, item cms.Item) (err error) {
	return errors.New("not implemented")
}

// Returns the Item
func (repo *Repository) DeleteItem(projectId, id string) (err error) {
	return errors.New("not implemented")
}
