This repro is meant to show off some strange behavior when handling two different independently produced webpack bundles.

This repro creates two different sets of bundles. Each bundle has two entry points, and some common code. We then have an
html page that serves one of the two entry points from each.

What I would expect to happen:

1. We load one/A1.js, which requires one/shared.js and logs "A1" and "shared A".
2. We then load two/B1.js, which requires two/shared.js and logs "B1" and "shared B".


What actually happens

1. We load one/A1.js, which requires one/shared.js and logs "A1" and "shared A". (expected)
2. We load two/B1.js, which requires one/shared.js (unexpected) and logs "B1" and "shared A". We then reenter the main chunk in B1, require two/shared.js, and log "B1" and "shared B"

My (limited) understanding of what's happening is that B1 sees that we already have a webpack runtime, and decides to use that to load shared. It looks for chunk "1", and since common_A's runtime has mapped 1 to one/shared.js, we load that. For reasons I don't fully understand we then load again with common_B's runtime, which has mapped 1 to two/shared.js


#Steps to repro
Create two chunked bundles, each of which ends up with their own run time in their common file.
`npm run build`

Serve up content
`python -m SimpleHTTPServer`

Navigate to localhost:8000 and open up debugger.


