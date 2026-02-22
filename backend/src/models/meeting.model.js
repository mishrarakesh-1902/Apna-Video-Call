import mongoose, { Schema } from "mongoose";


const meetingSchema = new Schema(
    {
        user_id: { type: String },
        meetingCode: { type: String, required: true },
        date: { type: Date, default: Date.now, required: true }
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);

export { Meeting };
// Meeting Schema: room_id, host, participants[], start_time, end_time, status

// Limits: Max 50 participants per meeting. Free tier: 10. Premium: 50

// Indexes: { room_id: 1 }, { host: 1, start_time: -1 }, { participants: 1 }

// Status: 'scheduled' | 'active' | 'ended' | 'cancelled'. Tracked with timestamps

// endTime: Automatically set when last participant leaves or host ends meeting

// Recording: { isRecorded: Boolean, recordingUrl: String, recordingSize: Number }

// Duration: Virtual field calculated as (endTime - startTime) in minutes

// Type: 'instant' | 'scheduled' | 'recurring'. Affects notification and reminder flow
