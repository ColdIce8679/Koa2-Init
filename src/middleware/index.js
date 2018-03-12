
import compose from 'koa-compose';

// 驗證機制（暫時先不使用）
import authorization from './authorization';

export default function middleware() {
    return compose([
            // authorization()
        ])
}