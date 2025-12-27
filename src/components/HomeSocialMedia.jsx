import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinks } from "../redux/actions/linksAction";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const getYoutubeThumbnail = (embedUrl) => {
  const id = embedUrl.split("/embed/")[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

const HomeSocialMedia = () => {
  const dispatch = useDispatch();
  const { links, loading } = useSelector((state) => state.links);
  const [activeVideos, setActiveVideos] = useState({});

  useEffect(() => {
    dispatch(getLinks());
  }, [dispatch]);

  const homeYoutube =
    links?.filter((l) => l.category === "homeyoutube") || [];
  const homeInsta =
    links?.filter((l) => l.category === "homeinsta") || [];

  const handlePlay = (id) =>
    setActiveVideos((prev) => ({ ...prev, [id]: true }));

  if (loading) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= YOUTUBE SECTION ================= */}
        {homeYoutube.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaYoutube className="text-red-600 text-4xl" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                YouTube Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeYoutube.map((video) => {
                const thumb = getYoutubeThumbnail(video.url);

                return (
                  <div
                    key={video._id}
                    className="aspect-video bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
                  >
                    {!activeVideos[video._id] ? (
                      <div
                        onClick={() => handlePlay(video._id)}
                        className="relative w-full h-full group"
                      >
                        <img
                          src={thumb}
                          alt="YouTube thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <FaYoutube className="text-red-600 text-6xl" />
                        </div>
                      </div>
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={`${video.url}?autoplay=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        title={video._id}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= INSTAGRAM SECTION ================= */}
        {homeInsta.length > 0 && (
          <div>
            <div className="flex items-center justify-center gap-3 mb-10">
              <FaInstagram className="text-pink-600 text-4xl" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Instagram Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {homeInsta.map((post) => {
                const reelCode =
                  post.url.split("/reel/")[1]?.split("/")[0];

                return (
                  <div
                    key={post._id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <iframe
                      src={`https://www.instagram.com/reel/${reelCode}/embed`}
                      title={post._id}
                      frameBorder="0"
                      className="w-full h-[680px]"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSocialMedia;
