export const mockData = {
  kind: 'books#volumes',
  totalItems: 740,
  items: [
    {
      kind: 'books#volume',
      id: '4_CBAAAACAAJ',
      etag: 'zPFCGSQjxYk',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/4_CBAAAACAAJ',
      volumeInfo: {
        title: 'Cake Test',
        authors: ['Pippa Goodhart'],
        publisher: 'EGMONT',
        publishedDate: '2007',
        description:
          'King Fred needs help! One daughter must be queen after him, but which one? Fred loves cakes, so he sets them a cake test. Who has the right ingredients to be queen?',
        industryIdentifiers: [
          {
            type: 'ISBN_10',
            identifier: '1405229551',
          },
          {
            type: 'ISBN_13',
            identifier: '9781405229555',
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: 'BOOK',
        categories: ['Cake'],
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: false,
        contentVersion: 'preview-1.0.0',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=4_CBAAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=4_CBAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com.eg/books?id=4_CBAAAACAAJ&dq=test&hl=&cd=1&source=gbs_api',
        infoLink:
          'http://books.google.com.eg/books?id=4_CBAAAACAAJ&dq=test&hl=&source=gbs_api',
        canonicalVolumeLink:
          'https://books.google.com/books/about/Cake_Test.html?hl=&id=4_CBAAAACAAJ',
      },
      saleInfo: {
        country: 'EG',
        saleability: 'NOT_FOR_SALE',
        isEbook: false,
      },
      accessInfo: {
        country: 'EG',
        viewability: 'NO_PAGES',
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          'http://play.google.com/books/reader?id=4_CBAAAACAAJ&hl=&source=gbs_api',
        accessViewStatus: 'NONE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'King Fred needs help! One daughter must be queen after him, but which one? Fred loves cakes, so he sets them a cake test. Who has the right ingredients to be queen?',
      },
    },
  ],
};
