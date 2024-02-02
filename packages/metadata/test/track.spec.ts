import { toLicense, trackMetadata, toTrackGenre, toExplicit, toArtistRole } from '../src'
import { toMarkdown, toCountry } from '../src/common'

describe('Given the track metadata', () => {
  describe('when using Track Metadata', () => {
    it('should return a valid track metadata', () => {
      const metadata = trackMetadata({
        title: 'title',
        titleLocale: 'en',
        description: toMarkdown(`this is a description`),
        artists: [
          {
            name: 'The best Artist',
            role: toArtistRole('Main Artist'),
          },
          {
            name: 'Artist 2',
            role: toArtistRole('Featuring'),
          },
        ],
        artwork: 'https://bitsong.io/artwork.png',
        audio: 'https://bitsong.io/audio.mp3',
        duration: 100,
        license: toLicense("No Rights Reserved (CC0)"), // or toLicense('no_rights_reserved')
        genre: toTrackGenre('ambient'),
        country: toCountry('IT'), // or toCountry('it') or toCountry('Italy') or toCountry('italy')
        explicit: toExplicit('Clean'), // or toExplicit('clean') or toExplicit('Explicit') or toExplicit('explicit')
        isrc: 'IT-ABC-12345',
        authors_publishers: [
          {
            name: 'Author 1',
            role: toArtistRole('Composer'),
          },
          {
            name: 'Author 2',
            role: toArtistRole('Lyricist'),
          },
        ],
        cLine: '2020 The Best Label',
        pLine: '2020 The Best Label',
        liveRecording: false,
        lyrics: toMarkdown(`this is a lyrics`),
        lyricsLocale: 'en',
        previousRelease: false,
        previewStartTime: 15,
        version: 'Radio Edit',
        video: 'https://bitsong.io/video.mp4',
        iswc: 'IT-ABC-12345',
        label: 'The Best Label',
      })

      expect(metadata).toMatchSnapshot({
        bitsong: {
          id: expect.any(String),
        },
      })
    })
  })
})