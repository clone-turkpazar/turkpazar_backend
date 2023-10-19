import axios from 'axios';
import TprFetchResponseDto from 'src/utils/turkpazar-ru/dto/tpr-fetch-response.dto';

export default class FetchCatalogItems {
  static async get(params: any = {}) {
    try {
      const urlParams = Object.keys(params)
        .map((key) => `${key}=${params[key]}`)
        .join('&');
      const url = `https://api.turkpazar.ru/api/catalog/items/?${urlParams}`;

      const response = await axios.get(url);
      const result: TprFetchResponseDto = {
        statusCode: response.status,
        data: response.data,
      };
      return result;
    } catch (exception) {
      if (exception.response) {
        const result: TprFetchResponseDto = {
          statusCode: exception.response.status,
          data: exception.response.data,
        };
        return result;
      }
      const result: TprFetchResponseDto = {
        statusCode: 500,
        data: '' + exception,
      };
      return result;
    }
  }
}
