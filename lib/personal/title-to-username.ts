export function TitleToUsername(title: string) {
    return title[0][0]
                  .toLowerCase()
                  .replaceAll('? ', '')
                  .replace(/[^A-Za-z0-9\- ]/g, '')
                  .replaceAll(' ', '-')}