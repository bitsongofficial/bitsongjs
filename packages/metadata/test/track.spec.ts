import { ArtistRole, LicenseType, TrackExpicit, TrackGenre, trackMetadata } from '../src'
import { AuthorPublisherRole } from '../src/author_publisher'
import { MediaAudioMimeType, toMarkdown } from '../src/common'
import { Country } from '../src/common/country'

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
            role: "Main Artist",
          },
          {
            name: 'Artist 2',
            role: "Featuring",
          },
        ],
        //contentType: MediaAudioMimeType.WAV_VND,
        artwork: 'https://bitsong.io/artwork.png',
        audio: 'https://bitsong.io/audio.mp3',
        duration: 100,
        license: LicenseType.NO_RIGHTS_RESERVED,
        genre: TrackGenre.DANCE,
        country: Country.ITALY,
        explicit: TrackExpicit.CLEAN,
        isrc: 'IT-ABC-12345',
        authors_publishers: [
          {
            name: 'Author 1',
            role: AuthorPublisherRole.COMPOSER,
          },
          {
            name: 'Author 2',
            role: AuthorPublisherRole.LYRICIST,
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