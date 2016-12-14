# hCMS, a headless CMS

hCMS will be a headless, api driven, content first cms to fit in a micro service environment.

[![Docker](https://img.shields.io/docker/pulls/smancke/hcms.svg)](https://hub.docker.com/r/smancke/hcms/)
[![Build Status](https://api.travis-ci.org/smancke/hcms.svg?branch=master)](https://travis-ci.org/smancke/hcms)
[![Go Report Card](https://goreportcard.com/badge/github.com/smancke/hcms)](https://goreportcard.com/report/github.com/smancke/hcms)
[![Coverage Status](https://coveralls.io/repos/github/smancke/hcms/badge.svg?branch=master)](https://coveralls.io/github/smancke/hcms?branch=master)

__Warning: Don't use for now: It's just started__

## Why to write in CMS in 2016?
* Most CMS focus on HTML!
* Only few headless CMS systems are open source and available on premise!
* Most enterprise CMS are very heavy and often too expensive!

## Technical Ideas
* ReactJS UI
* Golang server
* Usage of [react-jsonschema-form](https://mozilla-services.github.io/react-jsonschema-form/)
* Master slave architecture
** Master nodes for write operations (sql database with json fields)
** Replication and event protocol over web sockets
** Optional slaves/replicas for serving the content (nosql approach with json search capabilities)
* Rest API and GraphQL API
* Without own user management, but secured using JWT

## License
MIT Licensed
