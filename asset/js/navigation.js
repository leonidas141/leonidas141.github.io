/**
 * 自动生成导航栏 box1
 * 根据当前页面的路径深度自动计算正确的相对路径
 */
(function() {
    // 计算从当前页面到根目录的相对路径
    function getBasePath() {
        const path = window.location.pathname;
        // 移除文件名，只保留目录路径
        const dirPath = path.substring(0, path.lastIndexOf('/'));
        // 计算需要返回几级目录（根目录是 /）
        if (dirPath === '' || dirPath === '/') {
            return './';
        }
        // 计算目录深度（减去根目录的 /）
        const depth = dirPath.split('/').filter(p => p !== '').length;
        // 生成相对路径（../ 的数量等于目录深度）
        return '../'.repeat(depth) || './';
    }

    // 生成导航栏 HTML
    function generateNavigation() {
        const basePath = getBasePath();
        
        return `
    <div id="box1">
        <div id="box7">
            <div class="box7hp">
                <a> </a>
            </div>
            <div class="box7hp">
                <a> </a>
            </div>
            <div class="box7hp">
                <a href="${basePath}index.html">主页</a>
            </div>
            <div class="box7split">
                <a> </a>
            </div>
            <div class="box7split">
                <a> </a>
            </div>
            <div class="box7split">
                <div class="hover_img">
                    <a href="#">手机查看<span><img src="${basePath}asset/image/wechat.png" alt="手机查看" height="100" /></span></a>
                </div>
            </div>
            <div class="box7split">
                <a href="${basePath}basic/author.html">关于我</a>
            </div>
        </div>
        <div id="box8">
            <div class="box8split">
                <a href="${basePath}column/interesting/interesting.html">技术</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/writing/writing.html">随笔</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/tour/tour.html">游记</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/wild/wild.html">胡思</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/interesting/interesting.html">有趣</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/read/read.html">阅读</a>
            </div>
            <div class="box8split">
                <a href="${basePath}column/search/search.html">搜索</a>
            </div>
        </div>
    </div>`;
    }

    // 在页面加载时插入导航栏
    // 查找 id="box1" 的元素，如果存在则替换，否则在 body 开头插入
    function initNavigation() {
        const existingBox1 = document.getElementById('box1');
        const navHTML = generateNavigation();
        
        if (existingBox1) {
            // 如果已存在 box1，替换它
            existingBox1.outerHTML = navHTML;
        } else {
            // 如果不存在，在 body 开头插入
            const body = document.body;
            if (body.firstChild) {
                body.insertAdjacentHTML('afterbegin', navHTML);
            } else {
                body.innerHTML = navHTML + body.innerHTML;
            }
        }
    }

    // 如果 DOM 已加载，立即执行；否则等待 DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();

