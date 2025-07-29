import * as s from './player.module.css'

export default function Player({ src, srcSub, poster, className, ...props }) {
  return (
    <video className={`${s.video} ${className}`} {...props} autoPlay>
      <source src={src} type="video/mp4" />
      <track
        src={srcSub}
        kind="subtitles"
        srcLang="pt-br"
        label="Português"
      />
      Your browser does not support the video tag.
    </video>
  )
}