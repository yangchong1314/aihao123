"use client";

interface SocialShareProps {
  title: string;
  description: string;
  url: string;
}

export default function SocialShare({ title, description, url }: SocialShareProps) {
  // Web Share API (移动端原生分享)
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: description,
          url: url,
        });
      } catch (err) {
        console.log("分享取消");
      }
    } else {
      // 不支持原生分享，复制链接
      copyLink();
    }
  };

  const shareToWeibo = () => {
    const shareUrl = `https://service.weibo.com/share/share.php?title=${encodeURIComponent(
      title + " - " + description
    )}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, "_blank");
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert("链接已复制到剪贴板！");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-500">分享：</span>
      {/* 原生分享按钮（移动端优先） */}
      <button
        onClick={handleNativeShare}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        title="分享"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </button>
      <button
        onClick={shareToWeibo}
        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        title="分享到微博"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.739 5.443zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.194.573zm.176-2.719c-1.893-.493-4.033.45-4.82 2.127-.788 1.674-.108 3.473 1.693 4.043 1.836.58 4.041-.448 4.848-2.116.807-1.659.133-3.441-1.721-4.054z" />
        </svg>
      </button>
      <button
        onClick={shareToTwitter}
        className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
        title="分享到 Twitter"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </button>
      <button
        onClick={copyLink}
        className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
        title="复制链接"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  );
}
