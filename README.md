# hCMS, a headless CMS

hCMS will be a headless, api driven, content first cms.

__Warning: Don't use for now: It's just started__

## Technical Ideas
* ReactJS UI
* Golang server
* Usage of [react-jsonschema-form](https://mozilla-services.github.io/react-jsonschema-form/)
* Master slave architecture
** Master nodes for write operations (sql database with json fields)
** Replication and event protocol over web sockets
** Optional slaves/replicas for serving the content (nosql approach with json search capabilities)
* Rest API and GraphQL API


## License
MIT Licensed
