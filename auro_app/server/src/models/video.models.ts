import mongoose, { Document, Schema, Model } from "mongoose";

const videoSchema: Schema<IVideo> = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
}, {
    collection: 'videos',
    timestamps: true
});

const Video: Model<IVideo> = mongoose.model<IVideo>('Video', videoSchema);
export default Video;

export interface IVideo extends Document {
    creator: mongoose.Types.ObjectId;
    title: string;
    thumbnail: string;
    prompt: string;
    video: string;
    createdAt?: Date;
    updatedAt?: Date;
}

/* 
const videos = [
  {
    title: "Get inspired to code",
    thumbnail:
      "https://i.ibb.co/tJBcX20/Appwrite-video.png",
    video:
      "https://player.vimeo.com/video/949579770?h=897cd5e781",
    prompt:
      "Create a motivating AI driven video aimed at inspiring coding enthusiasts with simple language",
  },
  {
    title: "How AI Shapes Coding Future",
    thumbnail:
      "https://i.ibb.co/Xkgk7DY/Video.png",
    video:
      "https://player.vimeo.com/video/949581999?h=4672125b31",
    prompt: "Picture the future of coding with AI. Show AR VR",
  },
  {
    title: "Dalmatian's journey through Italy",
    thumbnail:
      "https://i.ibb.co/CBYzyKh/Video-1.png",
    video:
      "https://player.vimeo.com/video/949582778?h=d60220d68d",
    prompt:
      "Create a heartwarming video following the travels of dalmatian dog exploring beautiful Italy",
  },
  {
    title: "Meet small AI friends",
    thumbnail:
      "https://i.ibb.co/7XqVPVT/Photo-1677756119517.png",
    video:
      "https://player.vimeo.com/video/949616422?h=d60220d68d",
    prompt:
      "Make a video about a small blue AI robot blinking its eyes and looking at the screen",
  },
  {
    title: "Find inspiration in Every Line",
    thumbnail:
      "https://i.ibb.co/mGfCYJY/Video-2.png",
    video:
      "https://player.vimeo.com/video/949617485?h=d60220d68d",
    prompt:
      "A buy working on his laptop that sparks excitement for coding, emphasizing the endless possibilities and personal growth it offers",
  },
  {
    title: "Japan's Blossoming temple",
    thumbnail:
      "https://i.ibb.co/3Y2Nk7q/Bucket-215.png",
    video:
      "https://player.vimeo.com/video/949618057?h=d60220d68d",
    prompt: "Create a captivating video journey through Japan's Sakura Temple",
  },
  {
    title: "A Glimpse into Tomorrow's VR World",
    thumbnail:
      "https://i.ibb.co/C5wXXf9/Video-3.png",
    video:
      "https://player.vimeo.com/video/949620017?h=d60220d68d",
    prompt: "An imaginative video envisioning the future of Virtual Reality",
  },
  {
    title: "A World where Ideas Grow Big",
    thumbnail:
      "https://i.ibb.co/DzXRfyr/Bucket-59038.png",
    video:
      "https://player.vimeo.com/video/949620200?h=d60220d68d",
    prompt:
      "Make a fun video about hackers and all the cool stuff they do with computers",
  },
];
*/
