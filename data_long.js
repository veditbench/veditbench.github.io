const longVideoDemoData = [
{
    originalVideo: "VEditBench-Long/animal_0001/input.mp4",
    category: "Animal",
    originalCaption: "A black patched white dog playing with newspaper in the grass with a black dog walking in the background",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the black patched white dog sleeping.",
            targetPrompt: "A black patched white dog is sleeping in the grass with a black dog walking in the background.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.756,
                    metric_2: 0.2629,
                    metric_3: 0.904,
                    metric_4: 0.4337,
                    metric_5: 0.8638,
                    metric_6: 0.3089,
                    metric_7: 0.8877,
                    metric_8: 0.932
                },
                method2: {
                    metric_1: 23.7075,
                    metric_2: 0.2182,
                    metric_3: 0.8751,
                    metric_4: 0.5288,
                    metric_5: 0.8061,
                    metric_6: 0.4294,
                    metric_7: 0.8472,
                    metric_8: 0.9611
                },
                method3: {
                    metric_1: 26.5255,
                    metric_2: 0.2503,
                    metric_3: 0.9808,
                    metric_4: 0.4223,
                    metric_5: 0.8062,
                    metric_6: 0.3878,
                    metric_7: 0.8472,
                    metric_8: 0.908
                },
                method4: {
                    metric_1: 26.7164,
                    metric_2: 0.243,
                    metric_3: 0.735,
                    metric_4: 0.3865,
                    metric_5: 0.6308,
                    metric_6: 0.2894,
                    metric_7: 0.7241,
                    metric_8: 0.9416
                }
            }
        },
        'object-change': {
            editPrompt: "Change the black patched white dog to a brown rabbit.",
            targetPrompt: "A brown rabbit playing with newspaper in the grass with a black dog walking in the background.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.0962,
                    metric_2: 0.2879,
                    metric_3: 0.9235,
                    metric_4: 0.4146,
                    metric_5: 0.7714,
                    metric_6: 0.3115,
                    metric_7: 0.7925,
                    metric_8: 0.9324
                },
                method2: {
                    metric_1: 26.0924,
                    metric_2: 0.2047,
                    metric_3: 0.8763,
                    metric_4: 0.5328,
                    metric_5: 0.8126,
                    metric_6: 0.4373,
                    metric_7: 0.834,
                    metric_8: 0.964
                },
                method3: {
                    metric_1: 24.3363,
                    metric_2: 0.1624,
                    metric_3: 0.9871,
                    metric_4: 0.4676,
                    metric_5: 0.811,
                    metric_6: 0.4242,
                    metric_7: 0.8281,
                    metric_8: 0.9105
                },
                method4: {
                    metric_1: 25.7283,
                    metric_2: 0.2117,
                    metric_3: 0.7216,
                    metric_4: 0.3675,
                    metric_5: 0.5767,
                    metric_6: 0.281,
                    metric_7: 0.6997,
                    metric_8: 0.9405
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a red frisbee next to the black patched white dog.",
            targetPrompt: "A black patched white dog is playing with a newspaper in the grass, with a red frisbee next to it and a black dog walking in the background.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2943,
                    metric_2: 0.266,
                    metric_3: 0.7951,
                    metric_4: 0.439,
                    metric_5: 0.8043,
                    metric_6: 0.36,
                    metric_7: 0.8452,
                    metric_8: 0.9417
                },
                method2: {
                    metric_1: 28.7743,
                    metric_2: 0.2884,
                    metric_3: 0.9127,
                    metric_4: 0.5277,
                    metric_5: 0.7835,
                    metric_6: 0.4243,
                    metric_7: 0.7979,
                    metric_8: 0.9631
                },
                method3: {
                    metric_1: 28.7339,
                    metric_2: 0.2502,
                    metric_3: 0.9907,
                    metric_4: 0.5131,
                    metric_5: 0.8015,
                    metric_6: 0.4303,
                    metric_7: 0.8242,
                    metric_8: 0.9198
                },
                method4: {
                    metric_1: 26.7417,
                    metric_2: 0.2277,
                    metric_3: 0.7565,
                    metric_4: 0.3789,
                    metric_5: 0.6177,
                    metric_6: 0.309,
                    metric_7: 0.7285,
                    metric_8: 0.9453
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the black dog.",
            targetPrompt: "A black patched white dog is playing with newspaper in the grass in the background.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.4947,
                    metric_2: 0.2857,
                    metric_3: 0.7833,
                    metric_4: 0.4576,
                    metric_5: 0.8122,
                    metric_6: 0.3464,
                    metric_7: 0.8691,
                    metric_8: 0.9359
                },
                method2: {
                    metric_1: 27.6268,
                    metric_2: 0.2523,
                    metric_3: 0.7709,
                    metric_4: 0.5371,
                    metric_5: 0.7981,
                    metric_6: 0.4224,
                    metric_7: 0.8306,
                    metric_8: 0.9632
                },
                method3: {
                    metric_1: 28.0824,
                    metric_2: 0.259,
                    metric_3: 0.9866,
                    metric_4: 0.5356,
                    metric_5: 0.8102,
                    metric_6: 0.4394,
                    metric_7: 0.8145,
                    metric_8: 0.9169
                },
                method4: {
                    metric_1: 29.0541,
                    metric_2: 0.2683,
                    metric_3: 0.733,
                    metric_4: 0.4092,
                    metric_5: 0.7064,
                    metric_6: 0.2676,
                    metric_7: 0.7783,
                    metric_8: 0.9379
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a park with trees and a playground.",
            targetPrompt: "A black patched white dog is playing with a newspaper in the grass in a park with trees and a playground, while a black dog walks in the background.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.4641,
                    metric_2: 0.2892,
                    metric_3: 0.7946,
                    metric_4: 0.4573,
                    metric_5: 0.839,
                    metric_6: 0.3507,
                    metric_7: 0.8672,
                    metric_8: 0.9359
                },
                method2: {
                    metric_1: 28.3948,
                    metric_2: 0.2839,
                    metric_3: 0.7515,
                    metric_4: 0.5013,
                    metric_5: 0.7677,
                    metric_6: 0.4059,
                    metric_7: 0.8003,
                    metric_8: 0.9689
                },
                method3: {
                    metric_1: 18.0279,
                    metric_2: 0.1285,
                    metric_3: 0.5674,
                    metric_4: 0.1714,
                    metric_5: 0.8337,
                    metric_6: 0.5967,
                    metric_7: 0.7935,
                    metric_8: 0.8765
                },
                method4: {
                    metric_1: 26.9261,
                    metric_2: 0.261,
                    metric_3: 0.7999,
                    metric_4: 0.3949,
                    metric_5: 0.7015,
                    metric_6: 0.2832,
                    metric_7: 0.77,
                    metric_8: 0.9417
                }
            }
        },
        stylization: {
            editPrompt: "Make it a watercolor painting.",
            targetPrompt: "A black patched white dog playing with newspaper in the grass with a black dog walking in the background, depicted a watercolor painting.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0001/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0001/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0001/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0001/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 34.0279,
                    metric_2: 0.2953,
                    metric_3: 0.8947,
                    metric_4: 0.4256,
                    metric_5: 0.5265,
                    metric_6: 0.4425,
                    metric_7: 0.6382,
                    metric_8: 0.9305
                },
                method2: {
                    metric_1: 29.4129,
                    metric_2: 0.2179,
                    metric_3: 0.8505,
                    metric_4: 0.4547,
                    metric_5: 0.5117,
                    metric_6: 0.2795,
                    metric_7: 0.6812,
                    metric_8: 0.9559
                },
                method3: {
                    metric_1: 30.9886,
                    metric_2: 0.2834,
                    metric_3: 0.9816,
                    metric_4: 0.3137,
                    metric_5: 0.4522,
                    metric_6: 0.407,
                    metric_7: 0.5415,
                    metric_8: 0.9413
                },
                method4: {
                    metric_1: 33.1022,
                    metric_2: 0.3019,
                    metric_3: 0.7287,
                    metric_4: 0.3701,
                    metric_5: 0.4394,
                    metric_6: 0.3866,
                    metric_7: 0.6147,
                    metric_8: 0.9351
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/animal_0013/input.mp4",
    category: "Animal",
    originalCaption: "A young woman is holding a guinea pig in her hand while a man is holding another guinea pig. The camera zooms in to the guinea pig sometime.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the young woman petting the guinea pig gently.",
            targetPrompt: "A young woman is gently petting a guinea pig in her hand while a man is holding another guinea pig, and the camera occasionally zooms in on the guinea pig.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.991,
                    metric_2: 0.2597,
                    metric_3: 0.9004,
                    metric_4: 0.8047,
                    metric_5: 0.5571,
                    metric_6: 0.2158,
                    metric_7: 0.7271,
                    metric_8: 0.9704
                },
                method2: {
                    metric_1: 29.2501,
                    metric_2: 0.2529,
                    metric_3: 0.875,
                    metric_4: 0.8936,
                    metric_5: 0.7816,
                    metric_6: 0.2926,
                    metric_7: 0.7695,
                    metric_8: 0.9877
                },
                method3: {
                    metric_1: 27.5041,
                    metric_2: 0.2708,
                    metric_3: 0.7934,
                    metric_4: 0.4378,
                    metric_5: 0.8854,
                    metric_6: 0.6961,
                    metric_7: 0.9443,
                    metric_8: 0.8535
                },
                method4: {
                    metric_1: 31.0528,
                    metric_2: 0.27,
                    metric_3: 0.7669,
                    metric_4: 0.6253,
                    metric_5: 0.4995,
                    metric_6: 0.1834,
                    metric_7: 0.6445,
                    metric_8: 0.9568
                }
            }
        },
        'object-change': {
            editPrompt: "Change the guinea pig in the woman's hand to a rabbit.",
            targetPrompt: "A young woman is holding a rabbit in her hand while a man is holding a guinea pig, and the camera zooms in to the guinea pig sometimes.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.4207,
                    metric_2: 0.2822,
                    metric_3: 0.9105,
                    metric_4: 0.804,
                    metric_5: 0.5253,
                    metric_6: 0.1911,
                    metric_7: 0.6709,
                    metric_8: 0.9702
                },
                method2: {
                    metric_1: 28.1071,
                    metric_2: 0.268,
                    metric_3: 0.8461,
                    metric_4: 0.8481,
                    metric_5: 0.8451,
                    metric_6: 0.3167,
                    metric_7: 0.772,
                    metric_8: 0.9856
                },
                method3: {
                    metric_1: 23.5642,
                    metric_2: 0.1922,
                    metric_3: 0.7594,
                    metric_4: 0.2939,
                    metric_5: 0.7324,
                    metric_6: 0.5533,
                    metric_7: 0.7695,
                    metric_8: 0.8021
                },
                method4: {
                    metric_1: 29.825,
                    metric_2: 0.2767,
                    metric_3: 0.7736,
                    metric_4: 0.6484,
                    metric_5: 0.4762,
                    metric_6: 0.1675,
                    metric_7: 0.5786,
                    metric_8: 0.9593
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a colorful parrot perched on the man's shoulder.",
            targetPrompt: "A young woman is holding a guinea pig in her hand while a man, with a colorful parrot perched on his shoulder, is holding another guinea pig, and the camera zooms in to the guinea pig sometimes.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4156,
                    metric_2: 0.2291,
                    metric_3: 0.8651,
                    metric_4: 0.8122,
                    metric_5: 0.5292,
                    metric_6: 0.1889,
                    metric_7: 0.6953,
                    metric_8: 0.967
                },
                method2: {
                    metric_1: 23.5173,
                    metric_2: 0.2419,
                    metric_3: 0.8272,
                    metric_4: 0.7043,
                    metric_5: 0.7802,
                    metric_6: 0.3451,
                    metric_7: 0.7324,
                    metric_8: 0.9847
                },
                method3: {
                    metric_1: 18.6193,
                    metric_2: 0.1547,
                    metric_3: 0.7428,
                    metric_4: 0.3933,
                    metric_5: 0.8565,
                    metric_6: 0.5805,
                    metric_7: 0.8657,
                    metric_8: 0.8433
                },
                method4: {
                    metric_1: 29.8119,
                    metric_2: 0.3066,
                    metric_3: 0.7422,
                    metric_4: 0.6078,
                    metric_5: 0.5679,
                    metric_6: 0.2289,
                    metric_7: 0.6875,
                    metric_8: 0.9549
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the guinea pig from the man's hand.",
            targetPrompt: "A young woman is holding a guinea pig in her hand while a man stands beside her as the camera occasionally zooms in on the guinea pig.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.0921,
                    metric_2: 0.2897,
                    metric_3: 0.9115,
                    metric_4: 0.8055,
                    metric_5: 0.5353,
                    metric_6: 0.1876,
                    metric_7: 0.7046,
                    metric_8: 0.9693
                },
                method2: {
                    metric_1: 28.5503,
                    metric_2: 0.2655,
                    metric_3: 0.8633,
                    metric_4: 0.8944,
                    metric_5: 0.76,
                    metric_6: 0.2689,
                    metric_7: 0.7515,
                    metric_8: 0.9872
                },
                method3: {
                    metric_1: 25.3252,
                    metric_2: 0.3284,
                    metric_3: 0.7714,
                    metric_4: 0.622,
                    metric_5: 0.4587,
                    metric_6: 0.4461,
                    metric_7: 0.7842,
                    metric_8: 0.9218
                },
                method4: {
                    metric_1: 29.8426,
                    metric_2: 0.3108,
                    metric_3: 0.7332,
                    metric_4: 0.6027,
                    metric_5: 0.6373,
                    metric_6: 0.2775,
                    metric_7: 0.7861,
                    metric_8: 0.9585
                }
            }
        },
        'scene-change': {
            editPrompt: "Change the setting to a cozy living room with a fireplace.",
            targetPrompt: "A young woman is holding a guinea pig in her hand while a man is holding another guinea pig in a cozy living room with a fireplace and the camera occasionally zooms in on the guinea pigs.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.873,
                    metric_2: 0.2521,
                    metric_3: 0.8887,
                    metric_4: 0.7687,
                    metric_5: 0.5166,
                    metric_6: 0.2274,
                    metric_7: 0.6875,
                    metric_8: 0.969
                },
                method2: {
                    metric_1: 26.3725,
                    metric_2: 0.2563,
                    metric_3: 0.8706,
                    metric_4: 0.7702,
                    metric_5: 0.6625,
                    metric_6: 0.2493,
                    metric_7: 0.7524,
                    metric_8: 0.989
                },
                method3: {
                    metric_1: 21.7003,
                    metric_2: 0.1484,
                    metric_3: 0.635,
                    metric_4: 0.4119,
                    metric_5: 0.5176,
                    metric_6: 0.4087,
                    metric_7: 0.7275,
                    metric_8: 0.8772
                },
                method4: {
                    metric_1: 29.4142,
                    metric_2: 0.2713,
                    metric_3: 0.7243,
                    metric_4: 0.536,
                    metric_5: 0.6202,
                    metric_6: 0.2818,
                    metric_7: 0.7275,
                    metric_8: 0.9604
                }
            }
        },
        stylization: {
            editPrompt: "Render it in a macro photography style.",
            targetPrompt: "A young woman is holding a guinea pig in her hand while a man is holding another guinea pig The camera zooms in to the guinea pig sometimeRender it in a macro photography style.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0013/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0013/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0013/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0013/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8,
                    metric_2: 0.2714,
                    metric_3: 0.8762,
                    metric_4: 0.7983,
                    metric_5: 0.6303,
                    metric_6: 0.2515,
                    metric_7: 0.7661,
                    metric_8: 0.9662
                },
                method2: {
                    metric_1: 25.0519,
                    metric_2: 0.2398,
                    metric_3: 0.8551,
                    metric_4: 0.7795,
                    metric_5: 0.6839,
                    metric_6: 0.2251,
                    metric_7: 0.7529,
                    metric_8: 0.982
                },
                method3: {
                    metric_1: 15.9137,
                    metric_2: 0.0075,
                    metric_3: 0.704,
                    metric_4: 0.1691,
                    metric_5: 0.6816,
                    metric_6: 0.5086,
                    metric_7: 0.8335,
                    metric_8: 0.9028
                },
                method4: {
                    metric_1: 29.6108,
                    metric_2: 0.296,
                    metric_3: 0.7673,
                    metric_4: 0.5541,
                    metric_5: 0.7129,
                    metric_6: 0.3332,
                    metric_7: 0.8784,
                    metric_8: 0.9533
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/animal_0019/input.mp4",
    category: "Animal",
    originalCaption: "Amdist a group of fishes in deep water, a white shark moves thriugh gracefully",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the shark swimming swiftly.",
            targetPrompt: "Amidst a group of fishes in deep water, a white shark swims swiftly and gracefully.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.3616,
                    metric_2: 0.2531,
                    metric_3: 0.8318,
                    metric_4: 0.6702,
                    metric_5: 0.758,
                    metric_6: 0.5468,
                    metric_7: 0.8564,
                    metric_8: 0.98
                },
                method2: {
                    metric_1: 25.1494,
                    metric_2: 0.2591,
                    metric_3: 0.9108,
                    metric_4: 0.8696,
                    metric_5: 0.6985,
                    metric_6: 0.501,
                    metric_7: 0.7544,
                    metric_8: 0.9851
                },
                method3: {
                    metric_1: 24.6375,
                    metric_2: 0.2376,
                    metric_3: 0.7466,
                    metric_4: 0.6958,
                    metric_5: 0.8048,
                    metric_6: 0.6731,
                    metric_7: 0.9116,
                    metric_8: 0.9712
                },
                method4: {
                    metric_1: 25.1718,
                    metric_2: 0.263,
                    metric_3: 0.8154,
                    metric_4: 0.647,
                    metric_5: 0.6365,
                    metric_6: 0.4342,
                    metric_7: 0.7607,
                    metric_8: 0.974
                }
            }
        },
        'object-change': {
            editPrompt: "Change the white shark to a dolphin.",
            targetPrompt: "Amidst a group of fishes in deep water, a dolphin moves through gracefully.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2168,
                    metric_2: 0.2427,
                    metric_3: 0.8453,
                    metric_4: 0.6735,
                    metric_5: 0.731,
                    metric_6: 0.4901,
                    metric_7: 0.8477,
                    metric_8: 0.9828
                },
                method2: {
                    metric_1: 25.1337,
                    metric_2: 0.2587,
                    metric_3: 0.902,
                    metric_4: 0.8197,
                    metric_5: 0.7886,
                    metric_6: 0.6034,
                    metric_7: 0.8252,
                    metric_8: 0.9823
                },
                method3: {
                    metric_1: 25.5506,
                    metric_2: 0.2159,
                    metric_3: 0.8032,
                    metric_4: 0.5831,
                    metric_5: 0.9387,
                    metric_6: 0.638,
                    metric_7: 0.9243,
                    metric_8: 0.9424
                },
                method4: {
                    metric_1: 25.5401,
                    metric_2: 0.27,
                    metric_3: 0.8098,
                    metric_4: 0.6928,
                    metric_5: 0.5535,
                    metric_6: 0.3458,
                    metric_7: 0.6997,
                    metric_8: 0.9779
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a treasure chest near the group of fishes.",
            targetPrompt: "Amidst a group of fishes in deep water, a white shark moves through gracefully, with a treasure chest nearby.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7229,
                    metric_2: 0.2279,
                    metric_3: 0.807,
                    metric_4: 0.6776,
                    metric_5: 0.7854,
                    metric_6: 0.5727,
                    metric_7: 0.918,
                    metric_8: 0.9785
                },
                method2: {
                    metric_1: 23.4695,
                    metric_2: 0.2242,
                    metric_3: 0.7994,
                    metric_4: 0.8166,
                    metric_5: 0.7054,
                    metric_6: 0.5563,
                    metric_7: 0.8008,
                    metric_8: 0.9818
                },
                method3: {
                    metric_1: 22.3436,
                    metric_2: 0.1935,
                    metric_3: 0.7922,
                    metric_4: 0.6756,
                    metric_5: 0.9569,
                    metric_6: 0.8708,
                    metric_7: 0.9604,
                    metric_8: 0.9401
                },
                method4: {
                    metric_1: 23.6158,
                    metric_2: 0.2319,
                    metric_3: 0.8371,
                    metric_4: 0.6911,
                    metric_5: 0.7179,
                    metric_6: 0.5486,
                    metric_7: 0.8237,
                    metric_8: 0.9707
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the group of fishes.",
            targetPrompt: "Amidst deep water, a white shark moves through gracefully.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.5563,
                    metric_2: 0.2314,
                    metric_3: 0.8331,
                    metric_4: 0.674,
                    metric_5: 0.7386,
                    metric_6: 0.5538,
                    metric_7: 0.8687,
                    metric_8: 0.9812
                },
                method2: {
                    metric_1: 20.5941,
                    metric_2: 0.1851,
                    metric_3: 0.8992,
                    metric_4: 0.7992,
                    metric_5: 0.5849,
                    metric_6: 0.3346,
                    metric_7: 0.6924,
                    metric_8: 0.9806
                },
                method3: {
                    metric_1: 11.8561,
                    metric_2: 0.0677,
                    metric_3: 0.7597,
                    metric_4: 0.6734,
                    metric_5: 0.2972,
                    metric_6: 0.1784,
                    metric_7: 0.4866,
                    metric_8: 0.9783
                },
                method4: {
                    metric_1: 22.5998,
                    metric_2: 0.2144,
                    metric_3: 0.8381,
                    metric_4: 0.6441,
                    metric_5: 0.6867,
                    metric_6: 0.5179,
                    metric_7: 0.8135,
                    metric_8: 0.9763
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a coral reef.",
            targetPrompt: "Amidst a group of fishes in a coral reef's deep waters, a white shark moves through gracefully.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.099,
                    metric_2: 0.2358,
                    metric_3: 0.8137,
                    metric_4: 0.6637,
                    metric_5: 0.7581,
                    metric_6: 0.5505,
                    metric_7: 0.8716,
                    metric_8: 0.9796
                },
                method2: {
                    metric_1: 23.2749,
                    metric_2: 0.2309,
                    metric_3: 0.7783,
                    metric_4: 0.7306,
                    metric_5: 0.6578,
                    metric_6: 0.4577,
                    metric_7: 0.7588,
                    metric_8: 0.9812
                },
                method3: {
                    metric_1: 17.0434,
                    metric_2: 0.1238,
                    metric_3: 0.7616,
                    metric_4: 0.3074,
                    metric_5: 0.9484,
                    metric_6: 0.7255,
                    metric_7: 0.9526,
                    metric_8: 0.8763
                },
                method4: {
                    metric_1: 25.3647,
                    metric_2: 0.2506,
                    metric_3: 0.8012,
                    metric_4: 0.6198,
                    metric_5: 0.5822,
                    metric_6: 0.3966,
                    metric_7: 0.7427,
                    metric_8: 0.9731
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a realistic wildlife documentary style.",
            targetPrompt: "Amdist a group of fishes in deep water, a white shark moves thriugh gracefullyRender the scene in a realistic wildlife documentary style.",
            resultVideos: {
                method1: "VEditBench-Long/animal_0019/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/animal_0019/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/animal_0019/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/animal_0019/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.745,
                    metric_2: 0.239,
                    metric_3: 0.8316,
                    metric_4: 0.7224,
                    metric_5: 0.6958,
                    metric_6: 0.4571,
                    metric_7: 0.7725,
                    metric_8: 0.9801
                },
                method2: {
                    metric_1: 24.6555,
                    metric_2: 0.2771,
                    metric_3: 0.8987,
                    metric_4: 0.8361,
                    metric_5: 0.5908,
                    metric_6: 0.335,
                    metric_7: 0.5957,
                    metric_8: 0.9881
                },
                method3: {
                    metric_1: 26.3338,
                    metric_2: 0.2639,
                    metric_3: 0.7929,
                    metric_4: 0.7891,
                    metric_5: 0.4085,
                    metric_6: 0.2938,
                    metric_7: 0.6226,
                    metric_8: 0.9708
                },
                method4: {
                    metric_1: 24.9849,
                    metric_2: 0.273,
                    metric_3: 0.8057,
                    metric_4: 0.7081,
                    metric_5: 0.5851,
                    metric_6: 0.4181,
                    metric_7: 0.7632,
                    metric_8: 0.9726
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/food_0001/input.mp4",
    category: "Food",
    originalCaption: "A man is cutting a yellow lemon on a wooden board in the kitchen.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the man squeezing the lemon instead of cutting it.",
            targetPrompt: "A man is squeezing a yellow lemon on a wooden board in the kitchen.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 32.3915,
                    metric_2: 0.2578,
                    metric_3: 0.8713,
                    metric_4: 0.8176,
                    metric_5: 0.804,
                    metric_6: 0.3622,
                    metric_7: 0.8433,
                    metric_8: 0.9927
                },
                method2: {
                    metric_1: 33.2788,
                    metric_2: 0.2446,
                    metric_3: 0.8799,
                    metric_4: 0.8819,
                    metric_5: 0.8551,
                    metric_6: 0.3634,
                    metric_7: 0.8452,
                    metric_8: 0.9956
                },
                method3: {
                    metric_1: 30.4075,
                    metric_2: 0.2027,
                    metric_3: 0.7722,
                    metric_4: 0.6134,
                    metric_5: 0.7075,
                    metric_6: 0.448,
                    metric_7: 0.7803,
                    metric_8: 0.9184
                },
                method4: {
                    metric_1: 32.7231,
                    metric_2: 0.2645,
                    metric_3: 0.8501,
                    metric_4: 0.7772,
                    metric_5: 0.7502,
                    metric_6: 0.3412,
                    metric_7: 0.7729,
                    metric_8: 0.9911
                }
            }
        },
        'object-change': {
            editPrompt: "Change the lemon to an apple.",
            targetPrompt: "A man is cutting a yellow apple on a wooden board in the kitchen.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.4631,
                    metric_2: 0.2553,
                    metric_3: 0.8721,
                    metric_4: 0.8318,
                    metric_5: 0.8225,
                    metric_6: 0.3427,
                    metric_7: 0.8628,
                    metric_8: 0.9925
                },
                method2: {
                    metric_1: 30.8495,
                    metric_2: 0.21,
                    metric_3: 0.8793,
                    metric_4: 0.8559,
                    metric_5: 0.8486,
                    metric_6: 0.41,
                    metric_7: 0.8857,
                    metric_8: 0.996
                },
                method3: {
                    metric_1: 30.8418,
                    metric_2: 0.213,
                    metric_3: 0.8599,
                    metric_4: 0.876,
                    metric_5: 0.8354,
                    metric_6: 0.3864,
                    metric_7: 0.8501,
                    metric_8: 0.9785
                },
                method4: {
                    metric_1: 31.0984,
                    metric_2: 0.2568,
                    metric_3: 0.8543,
                    metric_4: 0.8022,
                    metric_5: 0.7309,
                    metric_6: 0.2679,
                    metric_7: 0.7334,
                    metric_8: 0.9892
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a blue bowl next to the wooden board.",
            targetPrompt: "A man is cutting a yellow lemon on a wooden board in the kitchen, with a blue bowl next to the wooden board.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.8718,
                    metric_2: 0.2317,
                    metric_3: 0.8621,
                    metric_4: 0.8089,
                    metric_5: 0.84,
                    metric_6: 0.3879,
                    metric_7: 0.8696,
                    metric_8: 0.9919
                },
                method2: {
                    metric_1: 32.3304,
                    metric_2: 0.2159,
                    metric_3: 0.878,
                    metric_4: 0.9002,
                    metric_5: 0.7833,
                    metric_6: 0.3231,
                    metric_7: 0.7905,
                    metric_8: 0.9963
                },
                method3: {
                    metric_1: 28.0825,
                    metric_2: 0.1766,
                    metric_3: 0.8136,
                    metric_4: 0.7238,
                    metric_5: 0.9026,
                    metric_6: 0.4865,
                    metric_7: 0.9238,
                    metric_8: 0.9736
                },
                method4: {
                    metric_1: 32.675,
                    metric_2: 0.2389,
                    metric_3: 0.8547,
                    metric_4: 0.7711,
                    metric_5: 0.7679,
                    metric_6: 0.2727,
                    metric_7: 0.7612,
                    metric_8: 0.9894
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the wooden board.",
            targetPrompt: "A man is cutting a yellow lemon in the kitchen.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.5708,
                    metric_2: 0.2278,
                    metric_3: 0.8712,
                    metric_4: 0.8395,
                    metric_5: 0.7764,
                    metric_6: 0.3614,
                    metric_7: 0.8066,
                    metric_8: 0.9923
                },
                method2: {
                    metric_1: 29.8867,
                    metric_2: 0.2196,
                    metric_3: 0.8793,
                    metric_4: 0.8949,
                    metric_5: 0.814,
                    metric_6: 0.3223,
                    metric_7: 0.8311,
                    metric_8: 0.9959
                },
                method3: {
                    metric_1: 15.9691,
                    metric_2: 0.0843,
                    metric_3: 0.5882,
                    metric_4: 0.6651,
                    metric_5: 0.3089,
                    metric_6: 0.3567,
                    metric_7: 0.4656,
                    metric_8: 0.9529
                },
                method4: {
                    metric_1: 31.8748,
                    metric_2: 0.2369,
                    metric_3: 0.8516,
                    metric_4: 0.7557,
                    metric_5: 0.781,
                    metric_6: 0.2924,
                    metric_7: 0.7754,
                    metric_8: 0.9913
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it outdoors in a garden.",
            targetPrompt: "A man is cutting a yellow lemon on a wooden board in a garden.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.9704,
                    metric_2: 0.2451,
                    metric_3: 0.8726,
                    metric_4: 0.6079,
                    metric_5: 0.8181,
                    metric_6: 0.4225,
                    metric_7: 0.8765,
                    metric_8: 0.9876
                },
                method2: {
                    metric_1: 29.9335,
                    metric_2: 0.2381,
                    metric_3: 0.8717,
                    metric_4: 0.6504,
                    metric_5: 0.5979,
                    metric_6: 0.4697,
                    metric_7: 0.79,
                    metric_8: 0.9931
                },
                method3: {
                    metric_1: 12.782,
                    metric_2: 0.0556,
                    metric_3: 0.7684,
                    metric_4: 0.3954,
                    metric_5: 0.6226,
                    metric_6: 0.5112,
                    metric_7: 0.7388,
                    metric_8: 0.925
                },
                method4: {
                    metric_1: 31.9234,
                    metric_2: 0.2578,
                    metric_3: 0.8673,
                    metric_4: 0.7314,
                    metric_5: 0.8437,
                    metric_6: 0.3311,
                    metric_7: 0.8154,
                    metric_8: 0.9861
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a noir film style.",
            targetPrompt: "A man is cutting a yellow lemon on a wooden board in the kitchen, depicted in a noir film style.",
            resultVideos: {
                method1: "VEditBench-Long/food_0001/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/food_0001/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0001/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0001/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.2695,
                    metric_2: 0.2589,
                    metric_3: 0.8681,
                    metric_4: 0.7992,
                    metric_5: 0.5082,
                    metric_6: 0.2869,
                    metric_7: 0.5942,
                    metric_8: 0.993
                },
                method2: {
                    metric_1: 34.7256,
                    metric_2: 0.2808,
                    metric_3: 0.8765,
                    metric_4: 0.7411,
                    metric_5: 0.5615,
                    metric_6: 0.3683,
                    metric_7: 0.6855,
                    metric_8: 0.9966
                },
                method3: {
                    metric_1: 31.4803,
                    metric_2: 0.2093,
                    metric_3: 0.8423,
                    metric_4: 0.636,
                    metric_5: 0.453,
                    metric_6: 0.3209,
                    metric_7: 0.5889,
                    metric_8: 0.9846
                },
                method4: {
                    metric_1: 31.1141,
                    metric_2: 0.2493,
                    metric_3: 0.8573,
                    metric_4: 0.7509,
                    metric_5: 0.6295,
                    metric_6: 0.3178,
                    metric_7: 0.6958,
                    metric_8: 0.9905
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/food_0004/input.mp4",
    category: "Food",
    originalCaption: "A person is cooking mushrooms in a pan with cheese on a stovetop. The person putted some cheese on the mushrooms.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the person stirring the mushrooms.",
            targetPrompt: "A person is cooking mushrooms in a pan with cheese on a stovetop, stirring the mushrooms after putting some cheese on them.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.1693,
                    metric_2: 0.2492,
                    metric_3: 0.864,
                    metric_4: 0.733,
                    metric_5: 0.8298,
                    metric_6: 0.4319,
                    metric_7: 0.9536,
                    metric_8: 0.9773
                },
                method2: {
                    metric_1: 27.9793,
                    metric_2: 0.2197,
                    metric_3: 0.8675,
                    metric_4: 0.828,
                    metric_5: 0.8796,
                    metric_6: 0.4106,
                    metric_7: 0.9175,
                    metric_8: 0.9927
                },
                method3: {
                    metric_1: 20.4918,
                    metric_2: 0.119,
                    metric_3: 0.7798,
                    metric_4: 0.4269,
                    metric_5: 0.9453,
                    metric_6: 0.7422,
                    metric_7: 0.9712,
                    metric_8: 0.8396
                },
                method4: {
                    metric_1: 27.9361,
                    metric_2: 0.2444,
                    metric_3: 0.8215,
                    metric_4: 0.6142,
                    metric_5: 0.631,
                    metric_6: 0.3235,
                    metric_7: 0.7139,
                    metric_8: 0.9756
                }
            }
        },
        'object-change': {
            editPrompt: "Change the mushrooms to bell peppers.",
            targetPrompt: "A person is cooking bell peppers in a pan with cheese on a stovetop, having put some cheese on the bell peppers.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.2123,
                    metric_2: 0.2177,
                    metric_3: 0.8376,
                    metric_4: 0.714,
                    metric_5: 0.8255,
                    metric_6: 0.4469,
                    metric_7: 0.9155,
                    metric_8: 0.9811
                },
                method2: {
                    metric_1: 26.5453,
                    metric_2: 0.1516,
                    metric_3: 0.8664,
                    metric_4: 0.7221,
                    metric_5: 0.6702,
                    metric_6: 0.2645,
                    metric_7: 0.6821,
                    metric_8: 0.9935
                },
                method3: {
                    metric_1: 23.7998,
                    metric_2: 0.1463,
                    metric_3: 0.7184,
                    metric_4: 0.3105,
                    metric_5: 0.868,
                    metric_6: 0.5407,
                    metric_7: 0.9531,
                    metric_8: 0.8417
                },
                method4: {
                    metric_1: 29.5658,
                    metric_2: 0.2219,
                    metric_3: 0.8246,
                    metric_4: 0.6282,
                    metric_5: 0.7056,
                    metric_6: 0.3551,
                    metric_7: 0.7158,
                    metric_8: 0.9811
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a spatula to the scene.",
            targetPrompt: "A person is cooking mushrooms in a pan with cheese on a stovetop, having added some cheese to the mushrooms, and a spatula.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2048,
                    metric_2: 0.2406,
                    metric_3: 0.858,
                    metric_4: 0.7125,
                    metric_5: 0.7828,
                    metric_6: 0.3941,
                    metric_7: 0.9438,
                    metric_8: 0.9759
                },
                method2: {
                    metric_1: 25.675,
                    metric_2: 0.1869,
                    metric_3: 0.8649,
                    metric_4: 0.905,
                    metric_5: 0.8089,
                    metric_6: 0.3459,
                    metric_7: 0.8716,
                    metric_8: 0.9929
                },
                method3: {
                    metric_1: 20.6767,
                    metric_2: 0.1423,
                    metric_3: 0.7729,
                    metric_4: 0.5349,
                    metric_5: 0.8831,
                    metric_6: 0.5078,
                    metric_7: 0.9438,
                    metric_8: 0.9395
                },
                method4: {
                    metric_1: 27.4336,
                    metric_2: 0.2367,
                    metric_3: 0.8114,
                    metric_4: 0.615,
                    metric_5: 0.6638,
                    metric_6: 0.3421,
                    metric_7: 0.7168,
                    metric_8: 0.9755
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the cheese.",
            targetPrompt: "A person is cooking mushrooms in a pan with cheese on a stovetop.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.6221,
                    metric_2: 0.2436,
                    metric_3: 0.8599,
                    metric_4: 0.7297,
                    metric_5: 0.8582,
                    metric_6: 0.4482,
                    metric_7: 0.9604,
                    metric_8: 0.9775
                },
                method2: {
                    metric_1: 28.2799,
                    metric_2: 0.1812,
                    metric_3: 0.869,
                    metric_4: 0.8822,
                    metric_5: 0.761,
                    metric_6: 0.2888,
                    metric_7: 0.7476,
                    metric_8: 0.994
                },
                method3: {
                    metric_1: 15.9309,
                    metric_2: 0.1142,
                    metric_3: 0.7265,
                    metric_4: 0.5709,
                    metric_5: 0.3888,
                    metric_6: 0.5299,
                    metric_7: 0.5117,
                    metric_8: 0.9165
                },
                method4: {
                    metric_1: 26.9381,
                    metric_2: 0.2262,
                    metric_3: 0.8296,
                    metric_4: 0.6111,
                    metric_5: 0.6456,
                    metric_6: 0.3279,
                    metric_7: 0.7183,
                    metric_8: 0.9741
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in an outdoor barbecue setting.",
            targetPrompt: "A person is cooking mushrooms in a pan with cheese on a stovetop, having added some cheese on the mushrooms, in an outdoor barbecue setting.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.4499,
                    metric_2: 0.2006,
                    metric_3: 0.8698,
                    metric_4: 0.7175,
                    metric_5: 0.8249,
                    metric_6: 0.4473,
                    metric_7: 0.9585,
                    metric_8: 0.976
                },
                method2: {
                    metric_1: 27.8436,
                    metric_2: 0.2238,
                    metric_3: 0.8518,
                    metric_4: 0.5519,
                    metric_5: 0.737,
                    metric_6: 0.3346,
                    metric_7: 0.9038,
                    metric_8: 0.9868
                },
                method3: {
                    metric_1: 22.0893,
                    metric_2: 0.1271,
                    metric_3: 0.6999,
                    metric_4: 0.2159,
                    metric_5: 0.9206,
                    metric_6: 0.4751,
                    metric_7: 0.8984,
                    metric_8: 0.8077
                },
                method4: {
                    metric_1: 26.7119,
                    metric_2: 0.2164,
                    metric_3: 0.8218,
                    metric_4: 0.6174,
                    metric_5: 0.5976,
                    metric_6: 0.3514,
                    metric_7: 0.6987,
                    metric_8: 0.9759
                }
            }
        },
        stylization: {
            editPrompt: "Render it in a macro photography style.",
            targetPrompt: "A person is cooking mushrooms in a pan with cheese on a stovetop The person putted some cheese on the mushroomsRender it in a macro photography style.",
            resultVideos: {
                method1: "VEditBench-Long/food_0004/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/food_0004/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0004/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0004/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.5181,
                    metric_2: 0.2425,
                    metric_3: 0.8688,
                    metric_4: 0.7704,
                    metric_5: 0.9074,
                    metric_6: 0.5069,
                    metric_7: 0.9434,
                    metric_8: 0.9798
                },
                method2: {
                    metric_1: 27.4672,
                    metric_2: 0.184,
                    metric_3: 0.8561,
                    metric_4: 0.6785,
                    metric_5: 0.7837,
                    metric_6: 0.4156,
                    metric_7: 0.8921,
                    metric_8: 0.9908
                },
                method3: {
                    metric_1: 23.2684,
                    metric_2: 0.0172,
                    metric_3: 0.7884,
                    metric_4: 0.2955,
                    metric_5: 0.7091,
                    metric_6: 0.5527,
                    metric_7: 0.8608,
                    metric_8: 0.9272
                },
                method4: {
                    metric_1: 25.747,
                    metric_2: 0.2212,
                    metric_3: 0.8168,
                    metric_4: 0.6289,
                    metric_5: 0.7441,
                    metric_6: 0.4521,
                    metric_7: 0.8062,
                    metric_8: 0.9775
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/food_0010/input.mp4",
    category: "Food",
    originalCaption: "There is a meal of fried dumplings with rice, with a person firstly placing a phone beside the meal and then later taking it towards them",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the person eating the dumplings.",
            targetPrompt: "There is a meal of fried dumplings with rice, with a person firstly placing a phone beside the meal, then later taking it towards them, and eating the dumplings.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.6709,
                    metric_2: 0.2309,
                    metric_3: 0.957,
                    metric_4: 0.7751,
                    metric_5: 0.7637,
                    metric_6: 0.2879,
                    metric_7: 0.8237,
                    metric_8: 0.9198
                },
                method2: {
                    metric_1: 28.2293,
                    metric_2: 0.2184,
                    metric_3: 0.9647,
                    metric_4: 0.8294,
                    metric_5: 0.7241,
                    metric_6: 0.2587,
                    metric_7: 0.7793,
                    metric_8: 0.9739
                },
                method3: {
                    metric_1: 26.8536,
                    metric_2: 0.2074,
                    metric_3: 0.9406,
                    metric_4: 0.6781,
                    metric_5: 0.614,
                    metric_6: 0.2249,
                    metric_7: 0.6909,
                    metric_8: 0.8816
                },
                method4: {
                    metric_1: 29.9025,
                    metric_2: 0.259,
                    metric_3: 0.9116,
                    metric_4: 0.6375,
                    metric_5: 0.3967,
                    metric_6: 0.0384,
                    metric_7: 0.4993,
                    metric_8: 0.9386
                }
            }
        },
        'object-change': {
            editPrompt: "Change the meal to a plate of sushi.",
            targetPrompt: "There is a meal of sushi with rice, with a person firstly placing a phone beside the meal and then later taking it towards them.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8874,
                    metric_2: 0.2505,
                    metric_3: 0.9641,
                    metric_4: 0.7592,
                    metric_5: 0.7949,
                    metric_6: 0.3784,
                    metric_7: 0.8638,
                    metric_8: 0.9243
                },
                method2: {
                    metric_1: 26.621,
                    metric_2: 0.2614,
                    metric_3: 0.9264,
                    metric_4: 0.6877,
                    metric_5: 0.88,
                    metric_6: 0.4662,
                    metric_7: 0.877,
                    metric_8: 0.9693
                },
                method3: {
                    metric_1: 25.8081,
                    metric_2: 0.2102,
                    metric_3: 0.8581,
                    metric_4: 0.3901,
                    metric_5: 0.9028,
                    metric_6: 0.6079,
                    metric_7: 0.8999,
                    metric_8: 0.8131
                },
                method4: {
                    metric_1: 26.9761,
                    metric_2: 0.2653,
                    metric_3: 0.9474,
                    metric_4: 0.5784,
                    metric_5: 0.6749,
                    metric_6: 0.4057,
                    metric_7: 0.7354,
                    metric_8: 0.9285
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a cup of tea next to the meal.",
            targetPrompt: "There is a meal of fried dumplings with rice, accompanied by a cup of tea, with a person firstly placing a phone beside the meal and then later taking it towards them.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2994,
                    metric_2: 0.2289,
                    metric_3: 0.964,
                    metric_4: 0.7738,
                    metric_5: 0.8316,
                    metric_6: 0.3196,
                    metric_7: 0.8662,
                    metric_8: 0.9218
                },
                method2: {
                    metric_1: 29.0095,
                    metric_2: 0.2331,
                    metric_3: 0.955,
                    metric_4: 0.8773,
                    metric_5: 0.7727,
                    metric_6: 0.28,
                    metric_7: 0.7861,
                    metric_8: 0.9742
                },
                method3: {
                    metric_1: 27.7431,
                    metric_2: 0.1833,
                    metric_3: 0.9334,
                    metric_4: 0.6454,
                    metric_5: 0.8057,
                    metric_6: 0.3356,
                    metric_7: 0.7817,
                    metric_8: 0.8957
                },
                method4: {
                    metric_1: 28.9119,
                    metric_2: 0.2097,
                    metric_3: 0.9098,
                    metric_4: 0.6132,
                    metric_5: 0.2623,
                    metric_6: 0.0148,
                    metric_7: 0.3909,
                    metric_8: 0.9415
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the phone.",
            targetPrompt: "There is a meal of fried dumplings with rice, with a person firstly placing a phone beside the meal, then later taking it towards them and removing it.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.8374,
                    metric_2: 0.2201,
                    metric_3: 0.9689,
                    metric_4: 0.7702,
                    metric_5: 0.773,
                    metric_6: 0.2942,
                    metric_7: 0.8418,
                    metric_8: 0.9195
                },
                method2: {
                    metric_1: 29.8696,
                    metric_2: 0.2502,
                    metric_3: 0.9717,
                    metric_4: 0.885,
                    metric_5: 0.7818,
                    metric_6: 0.2822,
                    metric_7: 0.8091,
                    metric_8: 0.9732
                },
                method3: {
                    metric_1: 11.5059,
                    metric_2: -0.0094,
                    metric_3: 0.4927,
                    metric_4: 0.2426,
                    metric_5: 0.5481,
                    metric_6: 0.2563,
                    metric_7: 0.6909,
                    metric_8: 0.9191
                },
                method4: {
                    metric_1: 30.7715,
                    metric_2: 0.2647,
                    metric_3: 0.9421,
                    metric_4: 0.6401,
                    metric_5: 0.4014,
                    metric_6: 0.0363,
                    metric_7: 0.5005,
                    metric_8: 0.9409
                }
            }
        },
        'scene-change': {
            editPrompt: "Change the setting to a picnic in a park.",
            targetPrompt: "At a picnic in a park, there is a meal of fried dumplings with rice, with a person firstly placing a phone beside the meal and then later taking it towards them.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.1425,
                    metric_2: 0.1827,
                    metric_3: 0.9632,
                    metric_4: 0.7663,
                    metric_5: 0.7899,
                    metric_6: 0.3089,
                    metric_7: 0.8369,
                    metric_8: 0.9141
                },
                method2: {
                    metric_1: 26.6147,
                    metric_2: 0.2156,
                    metric_3: 0.9685,
                    metric_4: 0.7572,
                    metric_5: 0.7065,
                    metric_6: 0.2522,
                    metric_7: 0.7197,
                    metric_8: 0.9703
                },
                method3: {
                    metric_1: 24.2566,
                    metric_2: 0.1734,
                    metric_3: 0.5331,
                    metric_4: 0.3525,
                    metric_5: 0.6476,
                    metric_6: 0.6629,
                    metric_7: 0.6792,
                    metric_8: 0.8623
                },
                method4: {
                    metric_1: 26.0704,
                    metric_2: 0.2152,
                    metric_3: 0.9264,
                    metric_4: 0.6569,
                    metric_5: 0.4112,
                    metric_6: 0.0649,
                    metric_7: 0.5103,
                    metric_8: 0.9374
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a vibrant, impressionist painting style.",
            targetPrompt: "There is a meal of fried dumplings with rice, with a person firstly placing a phone beside the meal and then later taking it towards themRender the scene in a vibrant, impressionist painting style.",
            resultVideos: {
                method1: "VEditBench-Long/food_0010/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/food_0010/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/food_0010/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/food_0010/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.8912,
                    metric_2: 0.2246,
                    metric_3: 0.9508,
                    metric_4: 0.7007,
                    metric_5: 0.5749,
                    metric_6: 0.2715,
                    metric_7: 0.6611,
                    metric_8: 0.924
                },
                method2: {
                    metric_1: 24.658,
                    metric_2: 0.1671,
                    metric_3: 0.9673,
                    metric_4: 0.6569,
                    metric_5: 0.6305,
                    metric_6: 0.2582,
                    metric_7: 0.6836,
                    metric_8: 0.9702
                },
                method3: {
                    metric_1: 25.0281,
                    metric_2: 0.1455,
                    metric_3: 0.9591,
                    metric_4: 0.5237,
                    metric_5: 0.5734,
                    metric_6: 0.1843,
                    metric_7: 0.6592,
                    metric_8: 0.9264
                },
                method4: {
                    metric_1: 30.8532,
                    metric_2: 0.1675,
                    metric_3: 0.9336,
                    metric_4: 0.6235,
                    metric_5: 0.2336,
                    metric_6: 0.0947,
                    metric_7: 0.3484,
                    metric_8: 0.9362
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/scenery_0006/input.mp4",
    category: "Scenery",
    originalCaption: "An autumn forest with sunlight filtering through the trees, illuminating the yellow and orange leaves. The scene captures a path covered with fallen leaves.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the sunlight flickering as if the leaves are rustling in the wind.",
            targetPrompt: "An autumn forest with sunlight flickering through the trees, as if the leaves are rustling in the wind, illuminates the yellow and orange foliage and captures a path covered with fallen leaves.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.117,
                    metric_2: 0.2494,
                    metric_3: 0.8862,
                    metric_4: 0.3167,
                    metric_5: 0.8171,
                    metric_6: 0.7199,
                    metric_7: 0.8735,
                    metric_8: 0.9572
                },
                method2: {
                    metric_1: 25.035,
                    metric_2: 0.2459,
                    metric_3: 0.9274,
                    metric_4: 0.4401,
                    metric_5: 0.8384,
                    metric_6: 0.5511,
                    metric_7: 0.5723,
                    metric_8: 0.976
                },
                method3: {
                    metric_1: 25.3858,
                    metric_2: 0.2427,
                    metric_3: 0.8726,
                    metric_4: 0.3105,
                    metric_5: 0.8409,
                    metric_6: 0.6225,
                    metric_7: 0.897,
                    metric_8: 0.935
                },
                method4: {
                    metric_1: 27.0798,
                    metric_2: 0.2438,
                    metric_3: 0.8967,
                    metric_4: 0.2832,
                    metric_5: 0.697,
                    metric_6: 0.6803,
                    metric_7: 0.8188,
                    metric_8: 0.9667
                }
            }
        },
        'object-change': {
            editPrompt: "Change the path to a small stream.",
            targetPrompt: "An autumn forest with sunlight filtering through the trees, illuminating the yellow and orange leaves, captures a small stream covered with fallen leaves.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.2255,
                    metric_2: 0.2833,
                    metric_3: 0.8953,
                    metric_4: 0.3296,
                    metric_5: 0.8515,
                    metric_6: 0.7099,
                    metric_7: 0.8833,
                    metric_8: 0.9533
                },
                method2: {
                    metric_1: 25.5849,
                    metric_2: 0.2896,
                    metric_3: 0.9059,
                    metric_4: 0.4127,
                    metric_5: 0.729,
                    metric_6: 0.4359,
                    metric_7: 0.6221,
                    metric_8: 0.9834
                },
                method3: {
                    metric_1: 21.3733,
                    metric_2: 0.1524,
                    metric_3: 0.8184,
                    metric_4: 0.2082,
                    metric_5: 0.6619,
                    metric_6: 0.567,
                    metric_7: 0.812,
                    metric_8: 0.9264
                },
                method4: {
                    metric_1: 25.8751,
                    metric_2: 0.2814,
                    metric_3: 0.8932,
                    metric_4: 0.297,
                    metric_5: 0.7026,
                    metric_6: 0.662,
                    metric_7: 0.8447,
                    metric_8: 0.9623
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a wooden bench next to the path.",
            targetPrompt: "An autumn forest with sunlight filtering through the trees, illuminating the yellow and orange leaves, captures a path covered with fallen leaves and a wooden bench next to the path.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.9745,
                    metric_2: 0.3159,
                    metric_3: 0.8994,
                    metric_4: 0.3114,
                    metric_5: 0.8388,
                    metric_6: 0.7353,
                    metric_7: 0.9038,
                    metric_8: 0.9533
                },
                method2: {
                    metric_1: 25.794,
                    metric_2: 0.2743,
                    metric_3: 0.92,
                    metric_4: 0.4402,
                    metric_5: 0.793,
                    metric_6: 0.4946,
                    metric_7: 0.8535,
                    metric_8: 0.9713
                },
                method3: {
                    metric_1: 26.139,
                    metric_2: 0.2642,
                    metric_3: 0.8166,
                    metric_4: 0.234,
                    metric_5: 0.8462,
                    metric_6: 0.6732,
                    metric_7: 0.8857,
                    metric_8: 0.9211
                },
                method4: {
                    metric_1: 26.9056,
                    metric_2: 0.3254,
                    metric_3: 0.9034,
                    metric_4: 0.2784,
                    metric_5: 0.7453,
                    metric_6: 0.7105,
                    metric_7: 0.8628,
                    metric_8: 0.9619
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the fallen leaves from the path.",
            targetPrompt: "An autumn forest with sunlight filtering through the trees, illuminating the yellow and orange leaves, captures a path that has had its fallen leaves removed.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.1329,
                    metric_2: 0.3062,
                    metric_3: 0.8943,
                    metric_4: 0.3199,
                    metric_5: 0.8359,
                    metric_6: 0.734,
                    metric_7: 0.8857,
                    metric_8: 0.9553
                },
                method2: {
                    metric_1: 26.4479,
                    metric_2: 0.2987,
                    metric_3: 0.9163,
                    metric_4: 0.446,
                    metric_5: 0.7865,
                    metric_6: 0.5538,
                    metric_7: 0.8496,
                    metric_8: 0.98
                },
                method3: {
                    metric_1: 24.4907,
                    metric_2: 0.2356,
                    metric_3: 0.8871,
                    metric_4: 0.3513,
                    metric_5: 0.8764,
                    metric_6: 0.6132,
                    metric_7: 0.8247,
                    metric_8: 0.9557
                },
                method4: {
                    metric_1: 27.1241,
                    metric_2: 0.2995,
                    metric_3: 0.8977,
                    metric_4: 0.2885,
                    metric_5: 0.7349,
                    metric_6: 0.717,
                    metric_7: 0.8599,
                    metric_8: 0.9639
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it a winter forest with snow on the ground and bare trees.",
            targetPrompt: "An winter forest with sunlight filtering through the trees, illuminating the bare trees, where the path covered with white snow.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.2689,
                    metric_2: 0.2864,
                    metric_3: 0.8892,
                    metric_4: 0.2942,
                    metric_5: 0.8651,
                    metric_6: 0.6741,
                    metric_7: 0.8438,
                    metric_8: 0.9587
                },
                method2: {
                    metric_1: 20.0124,
                    metric_2: 0.1819,
                    metric_3: 0.9146,
                    metric_4: 0.3646,
                    metric_5: 0.5452,
                    metric_6: 0.4062,
                    metric_7: 0.7002,
                    metric_8: 0.9774
                },
                method3: {
                    metric_1: 25.5328,
                    metric_2: 0.2249,
                    metric_3: 0.648,
                    metric_4: 0.1268,
                    metric_5: 0.7705,
                    metric_6: 0.7475,
                    metric_7: 0.8926,
                    metric_8: 0.8979
                },
                method4: {
                    metric_1: 26.5602,
                    metric_2: 0.3065,
                    metric_3: 0.876,
                    metric_4: 0.2454,
                    metric_5: 0.8383,
                    metric_6: 0.6,
                    metric_7: 0.7778,
                    metric_8: 0.9655
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a watercolor style.",
            targetPrompt: "An autumn forest with sunlight filtering through the trees, illuminating the yellow and orange leaves The scene captures a path covered with fallen leaves, depicted in a watercolor style.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0006/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0006/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0006/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0006/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.7532,
                    metric_2: 0.2974,
                    metric_3: 0.91,
                    metric_4: 0.3567,
                    metric_5: 0.7027,
                    metric_6: 0.7087,
                    metric_7: 0.8232,
                    metric_8: 0.9607
                },
                method2: {
                    metric_1: 25.6074,
                    metric_2: 0.2487,
                    metric_3: 0.93,
                    metric_4: 0.3844,
                    metric_5: 0.3797,
                    metric_6: 0.3324,
                    metric_7: 0.4795,
                    metric_8: 0.9788
                },
                method3: {
                    metric_1: 28.7461,
                    metric_2: 0.2634,
                    metric_3: 0.8325,
                    metric_4: 0.1839,
                    metric_5: 0.7369,
                    metric_6: 0.7561,
                    metric_7: 0.8438,
                    metric_8: 0.9165
                },
                method4: {
                    metric_1: 27.7978,
                    metric_2: 0.2569,
                    metric_3: 0.9032,
                    metric_4: 0.3235,
                    metric_5: 0.6219,
                    metric_6: 0.6776,
                    metric_7: 0.7603,
                    metric_8: 0.9655
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/scenery_0009/input.mp4",
    category: "Scenery",
    originalCaption: "A couple walking along a sandy beach with waves gently rolling in. The camera rotates around them, capturing the expansive ocean, rocky cliffs, and a few parked vehicles in the background.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the couple sitting on a blanket.",
            targetPrompt: "A couple sits on a blanket along a sandy beach with waves gently rolling in, while the camera rotates around them, capturing the expansive ocean, rocky cliffs, and a few parked vehicles in the background.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.5489,
                    metric_2: 0.2143,
                    metric_3: 0.9154,
                    metric_4: 0.7466,
                    metric_5: 0.9176,
                    metric_6: 0.6634,
                    metric_7: 0.8989,
                    metric_8: 0.9789
                },
                method2: {
                    metric_1: 24.1053,
                    metric_2: 0.2391,
                    metric_3: 0.9172,
                    metric_4: 0.7167,
                    metric_5: 0.755,
                    metric_6: 0.5547,
                    metric_7: 0.7949,
                    metric_8: 0.9896
                },
                method3: {
                    metric_1: 24.7132,
                    metric_2: 0.2027,
                    metric_3: 0.7716,
                    metric_4: 0.4971,
                    metric_5: 0.7576,
                    metric_6: 0.6259,
                    metric_7: 0.7778,
                    metric_8: 0.934
                },
                method4: {
                    metric_1: 21.7306,
                    metric_2: 0.2136,
                    metric_3: 0.7722,
                    metric_4: 0.5913,
                    metric_5: 0.4885,
                    metric_6: 0.3154,
                    metric_7: 0.468,
                    metric_8: 0.9776
                }
            }
        },
        'object-change': {
            editPrompt: "Change the couple to a single person.",
            targetPrompt: "A single person walks along a sandy beach with waves gently rolling in, as the camera rotates around them, capturing the expansive ocean, rocky cliffs, and a few parked vehicles in the background.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.1605,
                    metric_2: 0.2314,
                    metric_3: 0.9112,
                    metric_4: 0.7509,
                    metric_5: 0.914,
                    metric_6: 0.6823,
                    metric_7: 0.8975,
                    metric_8: 0.9806
                },
                method2: {
                    metric_1: 21.9326,
                    metric_2: 0.2161,
                    metric_3: 0.9192,
                    metric_4: 0.7707,
                    metric_5: 0.7798,
                    metric_6: 0.5628,
                    metric_7: 0.7646,
                    metric_8: 0.9896
                },
                method3: {
                    metric_1: 22.7109,
                    metric_2: 0.2327,
                    metric_3: 0.8976,
                    metric_4: 0.7876,
                    metric_5: 0.8584,
                    metric_6: 0.6715,
                    metric_7: 0.833,
                    metric_8: 0.9746
                },
                method4: {
                    metric_1: 22.1493,
                    metric_2: 0.2579,
                    metric_3: 0.812,
                    metric_4: 0.5904,
                    metric_5: 0.5894,
                    metric_6: 0.4079,
                    metric_7: 0.541,
                    metric_8: 0.9806
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a kite flying in the sky.",
            targetPrompt: "A couple walking along a sandy beach with waves gently rolling in, while the camera rotates around them, capturing the expansive ocean, rocky cliffs, a few parked vehicles in the background, and a kite flying in the sky.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.3166,
                    metric_2: 0.2269,
                    metric_3: 0.9095,
                    metric_4: 0.7434,
                    metric_5: 0.9115,
                    metric_6: 0.6979,
                    metric_7: 0.8843,
                    metric_8: 0.979
                },
                method2: {
                    metric_1: 24.4323,
                    metric_2: 0.1809,
                    metric_3: 0.9059,
                    metric_4: 0.778,
                    metric_5: 0.7675,
                    metric_6: 0.5474,
                    metric_7: 0.7031,
                    metric_8: 0.9886
                },
                method3: {
                    metric_1: 25.2437,
                    metric_2: 0.1605,
                    metric_3: 0.7805,
                    metric_4: 0.6343,
                    metric_5: 0.7892,
                    metric_6: 0.554,
                    metric_7: 0.7466,
                    metric_8: 0.9645
                },
                method4: {
                    metric_1: 22.81,
                    metric_2: 0.2442,
                    metric_3: 0.8141,
                    metric_4: 0.5745,
                    metric_5: 0.508,
                    metric_6: 0.3736,
                    metric_7: 0.4863,
                    metric_8: 0.9824
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the parked vehicles.",
            targetPrompt: "A couple walks along a sandy beach with waves gently rolling in, as the camera rotates around them, capturing the expansive ocean and rocky cliffs in the background.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.5513,
                    metric_2: 0.2309,
                    metric_3: 0.8967,
                    metric_4: 0.7233,
                    metric_5: 0.8796,
                    metric_6: 0.6115,
                    metric_7: 0.8716,
                    metric_8: 0.9775
                },
                method2: {
                    metric_1: 22.2437,
                    metric_2: 0.2298,
                    metric_3: 0.9133,
                    metric_4: 0.7808,
                    metric_5: 0.8647,
                    metric_6: 0.6653,
                    metric_7: 0.9302,
                    metric_8: 0.9875
                },
                method3: {
                    metric_1: 21.79,
                    metric_2: 0.2022,
                    metric_3: 0.8353,
                    metric_4: 0.6562,
                    metric_5: 0.8505,
                    metric_6: 0.6749,
                    metric_7: 0.8726,
                    metric_8: 0.9598
                },
                method4: {
                    metric_1: 21.4856,
                    metric_2: 0.2378,
                    metric_3: 0.7448,
                    metric_4: 0.5856,
                    metric_5: 0.4691,
                    metric_6: 0.3739,
                    metric_7: 0.4841,
                    metric_8: 0.9827
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a forest clearing.",
            targetPrompt: "A couple walking in a forest clearing, with the camera rotating around them to capture the expansive landscape, including towering trees, rocky cliffs, and a few parked vehicles in the background.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.3781,
                    metric_2: 0.1963,
                    metric_3: 0.8407,
                    metric_4: 0.5376,
                    metric_5: 0.6384,
                    metric_6: 0.4788,
                    metric_7: 0.7451,
                    metric_8: 0.9803
                },
                method2: {
                    metric_1: 20.2143,
                    metric_2: 0.1286,
                    metric_3: 0.8711,
                    metric_4: 0.4469,
                    metric_5: 0.5599,
                    metric_6: 0.5252,
                    metric_7: 0.6831,
                    metric_8: 0.9877
                },
                method3: {
                    metric_1: 22.1864,
                    metric_2: 0.1273,
                    metric_3: 0.5647,
                    metric_4: 0.2377,
                    metric_5: 0.587,
                    metric_6: 0.5458,
                    metric_7: 0.7466,
                    metric_8: 0.9469
                },
                method4: {
                    metric_1: 22.5994,
                    metric_2: 0.1675,
                    metric_3: 0.7097,
                    metric_4: 0.5074,
                    metric_5: 0.3361,
                    metric_6: 0.3396,
                    metric_7: 0.3787,
                    metric_8: 0.9819
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a noir film style.",
            targetPrompt: "A couple walking along a sandy beach with waves gently rolling in The camera rotates around them, capturing the expansive ocean, rocky cliffs, and a few parked vehicles in the background, depicted in a noir film style.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0009/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0009/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0009/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0009/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.3963,
                    metric_2: 0.1811,
                    metric_3: 0.8464,
                    metric_4: 0.6139,
                    metric_5: 0.5336,
                    metric_6: 0.5814,
                    metric_7: 0.7012,
                    metric_8: 0.9808
                },
                method2: {
                    metric_1: 28.3638,
                    metric_2: 0.2164,
                    metric_3: 0.9,
                    metric_4: 0.4659,
                    metric_5: 0.5315,
                    metric_6: 0.6122,
                    metric_7: 0.7017,
                    metric_8: 0.9901
                },
                method3: {
                    metric_1: 26.6833,
                    metric_2: 0.1976,
                    metric_3: 0.795,
                    metric_4: 0.3551,
                    metric_5: 0.5737,
                    metric_6: 0.5812,
                    metric_7: 0.6836,
                    metric_8: 0.9611
                },
                method4: {
                    metric_1: 28.8819,
                    metric_2: 0.2163,
                    metric_3: 0.7002,
                    metric_4: 0.5323,
                    metric_5: 0.3958,
                    metric_6: 0.56,
                    metric_7: 0.5723,
                    metric_8: 0.9735
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/scenery_0018/input.mp4",
    category: "Scenery",
    originalCaption: "The view continues shifting forward, unveiling a tranquil, rocky stream winding through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the stream flowing rapidly.",
            targetPrompt: "The view continues shifting forward, unveiling a tranquil, rocky stream flowing rapidly through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.6372,
                    metric_2: 0.2234,
                    metric_3: 0.9802,
                    metric_4: 0.4295,
                    metric_5: 0.896,
                    metric_6: 0.6162,
                    metric_7: 0.9375,
                    metric_8: 0.954
                },
                method2: {
                    metric_1: 24.1468,
                    metric_2: 0.2097,
                    metric_3: 0.9821,
                    metric_4: 0.5672,
                    metric_5: 0.8662,
                    metric_6: 0.5233,
                    metric_7: 0.9136,
                    metric_8: 0.9749
                },
                method3: {
                    metric_1: 18.4388,
                    metric_2: 0.1348,
                    metric_3: 0.9166,
                    metric_4: 0.289,
                    metric_5: 0.8535,
                    metric_6: 0.4476,
                    metric_7: 0.8774,
                    metric_8: 0.9192
                },
                method4: {
                    metric_1: 24.8788,
                    metric_2: 0.2339,
                    metric_3: 0.9709,
                    metric_4: 0.3703,
                    metric_5: 0.7582,
                    metric_6: 0.6224,
                    metric_7: 0.8096,
                    metric_8: 0.964
                }
            }
        },
        'object-change': {
            editPrompt: "Change the stream to a waterfall.",
            targetPrompt: "The view continues shifting forward, unveiling a tranquil waterfall cascading through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.4289,
                    metric_2: 0.2032,
                    metric_3: 0.9825,
                    metric_4: 0.447,
                    metric_5: 0.963,
                    metric_6: 0.6158,
                    metric_7: 0.9517,
                    metric_8: 0.9543
                },
                method2: {
                    metric_1: 21.5833,
                    metric_2: 0.1881,
                    metric_3: 0.9863,
                    metric_4: 0.5285,
                    metric_5: 0.8226,
                    metric_6: 0.5348,
                    metric_7: 0.877,
                    metric_8: 0.9794
                },
                method3: {
                    metric_1: 24.9507,
                    metric_2: 0.2384,
                    metric_3: 0.9488,
                    metric_4: 0.3668,
                    metric_5: 0.8225,
                    metric_6: 0.5492,
                    metric_7: 0.8965,
                    metric_8: 0.9287
                },
                method4: {
                    metric_1: 24.0476,
                    metric_2: 0.2135,
                    metric_3: 0.9626,
                    metric_4: 0.3546,
                    metric_5: 0.7429,
                    metric_6: 0.6637,
                    metric_7: 0.8281,
                    metric_8: 0.9632
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a wooden bridge over the stream.",
            targetPrompt: "The view continues shifting forward, unveiling a tranquil, rocky stream winding through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides, with a wooden bridge arching gracefully over the stream.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.6172,
                    metric_2: 0.2044,
                    metric_3: 0.9795,
                    metric_4: 0.4134,
                    metric_5: 0.927,
                    metric_6: 0.6217,
                    metric_7: 0.9463,
                    metric_8: 0.9531
                },
                method2: {
                    metric_1: 24.9792,
                    metric_2: 0.212,
                    metric_3: 0.9849,
                    metric_4: 0.5314,
                    metric_5: 0.8546,
                    metric_6: 0.5619,
                    metric_7: 0.8916,
                    metric_8: 0.9754
                },
                method3: {
                    metric_1: 23.9907,
                    metric_2: 0.1717,
                    metric_3: 0.9307,
                    metric_4: 0.2874,
                    metric_5: 0.9456,
                    metric_6: 0.7814,
                    metric_7: 0.9624,
                    metric_8: 0.8845
                },
                method4: {
                    metric_1: 26.0085,
                    metric_2: 0.2251,
                    metric_3: 0.9582,
                    metric_4: 0.3802,
                    metric_5: 0.8554,
                    metric_6: 0.6904,
                    metric_7: 0.8633,
                    metric_8: 0.9614
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the vibrant foilage.",
            targetPrompt: "The view continues shifting forward, unveiling a tranquil, rocky stream winding through a lush, green forest, enveloped by dense vegetation.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.0073,
                    metric_2: 0.2293,
                    metric_3: 0.981,
                    metric_4: 0.4209,
                    metric_5: 0.8912,
                    metric_6: 0.6095,
                    metric_7: 0.9448,
                    metric_8: 0.9537
                },
                method2: {
                    metric_1: 23.7371,
                    metric_2: 0.2254,
                    metric_3: 0.9839,
                    metric_4: 0.5344,
                    metric_5: 0.8211,
                    metric_6: 0.5208,
                    metric_7: 0.8628,
                    metric_8: 0.9703
                },
                method3: {
                    metric_1: 20.722,
                    metric_2: 0.1409,
                    metric_3: 0.9053,
                    metric_4: 0.1812,
                    metric_5: 0.4204,
                    metric_6: 0.4609,
                    metric_7: 0.6514,
                    metric_8: 0.9263
                },
                method4: {
                    metric_1: 24.934,
                    metric_2: 0.2376,
                    metric_3: 0.9737,
                    metric_4: 0.3698,
                    metric_5: 0.8146,
                    metric_6: 0.6532,
                    metric_7: 0.8828,
                    metric_8: 0.9621
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a snowy mountain landscape.",
            targetPrompt: "The view continues shifting forward, unveiling a tranquil, rocky stream winding through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides, set against a picturesque snowy mountain landscape.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.0253,
                    metric_2: 0.2033,
                    metric_3: 0.9799,
                    metric_4: 0.4227,
                    metric_5: 0.8971,
                    metric_6: 0.549,
                    metric_7: 0.9194,
                    metric_8: 0.9502
                },
                method2: {
                    metric_1: 23.0824,
                    metric_2: 0.2013,
                    metric_3: 0.9808,
                    metric_4: 0.4822,
                    metric_5: 0.72,
                    metric_6: 0.4431,
                    metric_7: 0.7793,
                    metric_8: 0.9723
                },
                method3: {
                    metric_1: 21.2939,
                    metric_2: 0.1258,
                    metric_3: 0.963,
                    metric_4: 0.2961,
                    metric_5: 0.7551,
                    metric_6: 0.6095,
                    metric_7: 0.9009,
                    metric_8: 0.9256
                },
                method4: {
                    metric_1: 23.749,
                    metric_2: 0.2114,
                    metric_3: 0.9773,
                    metric_4: 0.3916,
                    metric_5: 0.6483,
                    metric_6: 0.4856,
                    metric_7: 0.689,
                    metric_8: 0.963
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a black-and-white photograph style.",
            targetPrompt: "Render the scene of a view that continues shifting forward, unveiling a tranquil, rocky stream winding through a lush, green forest, enveloped by dense vegetation and vibrant foliage on both sides, in a black-and-white photograph style.",
            resultVideos: {
                method1: "VEditBench-Long/scenery_0018/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/scenery_0018/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/scenery_0018/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/scenery_0018/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2653,
                    metric_2: 0.1953,
                    metric_3: 0.9812,
                    metric_4: 0.4484,
                    metric_5: 0.8364,
                    metric_6: 0.6211,
                    metric_7: 0.9233,
                    metric_8: 0.9485
                },
                method2: {
                    metric_1: 27.6488,
                    metric_2: 0.1657,
                    metric_3: 0.9722,
                    metric_4: 0.5108,
                    metric_5: 0.5735,
                    metric_6: 0.559,
                    metric_7: 0.7339,
                    metric_8: 0.9753
                },
                method3: {
                    metric_1: 26.9665,
                    metric_2: 0.167,
                    metric_3: 0.9763,
                    metric_4: 0.3927,
                    metric_5: 0.6351,
                    metric_6: 0.5858,
                    metric_7: 0.7861,
                    metric_8: 0.9466
                },
                method4: {
                    metric_1: 24.5371,
                    metric_2: 0.2173,
                    metric_3: 0.9412,
                    metric_4: 0.3413,
                    metric_5: 0.8237,
                    metric_6: 0.7228,
                    metric_7: 0.877,
                    metric_8: 0.9616
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/sport activity_0004/input.mp4",
    category: "Sport activity",
    originalCaption: "A group of young people are skateboarding in the background, while the main focus is on one man repeatedly attempting and failing to perform a lion flip.",
    editTypes: {
        'motion-change': {
            editPrompt: "Have the teen sitting and talking on phone instead of skateboarding.",
            targetPrompt: "A group of young people are skateboarding in the background, while the main focus is on one man sitting and talking on phone.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.9859,
                    metric_2: 0.2297,
                    metric_3: 0.8805,
                    metric_4: 0.6801,
                    metric_5: 0.9096,
                    metric_6: 0.4824,
                    metric_7: 0.9336,
                    metric_8: 0.9853
                },
                method2: {
                    metric_1: 26.7044,
                    metric_2: 0.2079,
                    metric_3: 0.8885,
                    metric_4: 0.771,
                    metric_5: 0.769,
                    metric_6: 0.3763,
                    metric_7: 0.8154,
                    metric_8: 0.9935
                },
                method3: {
                    metric_1: 25.8028,
                    metric_2: 0.1784,
                    metric_3: 0.8578,
                    metric_4: 0.5839,
                    metric_5: 0.7656,
                    metric_6: 0.4847,
                    metric_7: 0.8203,
                    metric_8: 0.9477
                },
                method4: {
                    metric_1: 26.3575,
                    metric_2: 0.2283,
                    metric_3: 0.874,
                    metric_4: 0.622,
                    metric_5: 0.6642,
                    metric_6: 0.4004,
                    metric_7: 0.7324,
                    metric_8: 0.9816
                }
            }
        },
        'object-change': {
            editPrompt: "Change the man to woman.",
            targetPrompt: "A group of young people are skateboarding in the background, while the main focus is on one woman repeatedly attempting and failing to perform a lion flip.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8843,
                    metric_2: 0.2521,
                    metric_3: 0.8835,
                    metric_4: 0.6746,
                    metric_5: 0.921,
                    metric_6: 0.5034,
                    metric_7: 0.9355,
                    metric_8: 0.9849
                },
                method2: {
                    metric_1: 27.1458,
                    metric_2: 0.2308,
                    metric_3: 0.8906,
                    metric_4: 0.7721,
                    metric_5: 0.7873,
                    metric_6: 0.3385,
                    metric_7: 0.8296,
                    metric_8: 0.9939
                },
                method3: {
                    metric_1: 26.7985,
                    metric_2: 0.2333,
                    metric_3: 0.8888,
                    metric_4: 0.7779,
                    metric_5: 0.7924,
                    metric_6: 0.3316,
                    metric_7: 0.8232,
                    metric_8: 0.985
                },
                method4: {
                    metric_1: 25.4195,
                    metric_2: 0.2333,
                    metric_3: 0.8701,
                    metric_4: 0.635,
                    metric_5: 0.7306,
                    metric_6: 0.3824,
                    metric_7: 0.7759,
                    metric_8: 0.982
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a rabbit near the teen trying lion flip.",
            targetPrompt: "A group of young people are skateboarding in the background, while the main focus is on one man repeatedly attempting and failing to perform a lion flip, with a rabbit nearby.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.5604,
                    metric_2: 0.2504,
                    metric_3: 0.8799,
                    metric_4: 0.6804,
                    metric_5: 0.8885,
                    metric_6: 0.457,
                    metric_7: 0.9092,
                    metric_8: 0.9854
                },
                method2: {
                    metric_1: 31.9215,
                    metric_2: 0.2583,
                    metric_3: 0.8899,
                    metric_4: 0.7389,
                    metric_5: 0.7466,
                    metric_6: 0.48,
                    metric_7: 0.8169,
                    metric_8: 0.993
                },
                method3: {
                    metric_1: 30.6929,
                    metric_2: 0.2139,
                    metric_3: 0.8529,
                    metric_4: 0.6349,
                    metric_5: 0.8314,
                    metric_6: 0.592,
                    metric_7: 0.8887,
                    metric_8: 0.9588
                },
                method4: {
                    metric_1: 25.4871,
                    metric_2: 0.2409,
                    metric_3: 0.8738,
                    metric_4: 0.6285,
                    metric_5: 0.4498,
                    metric_6: 0.2783,
                    metric_7: 0.5576,
                    metric_8: 0.9834
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove people in the background.",
            targetPrompt: "One man repeatedly attempting and failing to perform a lion flip.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.662,
                    metric_2: 0.2098,
                    metric_3: 0.8791,
                    metric_4: 0.6626,
                    metric_5: 0.9015,
                    metric_6: 0.498,
                    metric_7: 0.9365,
                    metric_8: 0.9838
                },
                method2: {
                    metric_1: 19.7202,
                    metric_2: 0.1038,
                    metric_3: 0.8927,
                    metric_4: 0.775,
                    metric_5: 0.7795,
                    metric_6: 0.3592,
                    metric_7: 0.8091,
                    metric_8: 0.9944
                },
                method3: {
                    metric_1: 18.8265,
                    metric_2: 0.1211,
                    metric_3: 0.8628,
                    metric_4: 0.6651,
                    metric_5: 0.7427,
                    metric_6: 0.2541,
                    metric_7: 0.7515,
                    metric_8: 0.9784
                },
                method4: {
                    metric_1: 21.2934,
                    metric_2: 0.2444,
                    metric_3: 0.8752,
                    metric_4: 0.6536,
                    metric_5: 0.647,
                    metric_6: 0.2904,
                    metric_7: 0.665,
                    metric_8: 0.9843
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in an urban city with skyscrapers.",
            targetPrompt: "A group of young people are skateboarding in the background, while the main focus is on one man repeatedly attempting and failing to perform a lion flip. This scene takes place in an urban city with skyscrapers visible in the background.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.4293,
                    metric_2: 0.2042,
                    metric_3: 0.8808,
                    metric_4: 0.6636,
                    metric_5: 0.9379,
                    metric_6: 0.494,
                    metric_7: 0.9492,
                    metric_8: 0.9844
                },
                method2: {
                    metric_1: 27.411,
                    metric_2: 0.2002,
                    metric_3: 0.8872,
                    metric_4: 0.7171,
                    metric_5: 0.763,
                    metric_6: 0.5063,
                    metric_7: 0.8149,
                    metric_8: 0.9933
                },
                method3: {
                    metric_1: 14.3576,
                    metric_2: 0.016,
                    metric_3: 0.8275,
                    metric_4: 0.4788,
                    metric_5: 0.791,
                    metric_6: 0.6772,
                    metric_7: 0.8433,
                    metric_8: 0.9282
                },
                method4: {
                    metric_1: 27.0609,
                    metric_2: 0.217,
                    metric_3: 0.8688,
                    metric_4: 0.6205,
                    metric_5: 0.4128,
                    metric_6: 0.3051,
                    metric_7: 0.5737,
                    metric_8: 0.983
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in sepia tone.",
            targetPrompt: "A group of young people are skateboarding in the background, while the main focus is on one man repeatedly attempting and failing to perform a lion flip, this is rendered in a sepia tone.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0004/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0004/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0004/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0004/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.303,
                    metric_2: 0.2002,
                    metric_3: 0.877,
                    metric_4: 0.6558,
                    metric_5: 0.6424,
                    metric_6: 0.5169,
                    metric_7: 0.7573,
                    metric_8: 0.9855
                },
                method2: {
                    metric_1: 26.2644,
                    metric_2: 0.2027,
                    metric_3: 0.8866,
                    metric_4: 0.6462,
                    metric_5: 0.5954,
                    metric_6: 0.4032,
                    metric_7: 0.7065,
                    metric_8: 0.9922
                },
                method3: {
                    metric_1: 23.6648,
                    metric_2: 0.1951,
                    metric_3: 0.832,
                    metric_4: 0.5488,
                    metric_5: 0.4998,
                    metric_6: 0.3697,
                    metric_7: 0.6567,
                    metric_8: 0.961
                },
                method4: {
                    metric_1: 28.8155,
                    metric_2: 0.1967,
                    metric_3: 0.8619,
                    metric_4: 0.5841,
                    metric_5: 0.4442,
                    metric_6: 0.3956,
                    metric_7: 0.6162,
                    metric_8: 0.981
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/sport activity_0011/input.mp4",
    category: "Sport activity",
    originalCaption: "Two men are playing table tennis on a table with a net separating them in a gym.",
    editTypes: {
        'motion-change': {
            editPrompt: "Have both men throw the ball to each other.",
            targetPrompt: "Two men are throwing ball at each other in a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.2899,
                    metric_2: 0.2014,
                    metric_3: 0.8815,
                    metric_4: 0.7811,
                    metric_5: 0.8215,
                    metric_6: 0.4311,
                    metric_7: 0.8398,
                    metric_8: 0.9879
                },
                method2: {
                    metric_1: 22.0133,
                    metric_2: 0.1767,
                    metric_3: 0.881,
                    metric_4: 0.9006,
                    metric_5: 0.7344,
                    metric_6: 0.3556,
                    metric_7: 0.7695,
                    metric_8: 0.9943
                },
                method3: {
                    metric_1: 24.0929,
                    metric_2: 0.1663,
                    metric_3: 0.7985,
                    metric_4: 0.6398,
                    metric_5: 0.8133,
                    metric_6: 0.6889,
                    metric_7: 0.8193,
                    metric_8: 0.951
                },
                method4: {
                    metric_1: 25.4442,
                    metric_2: 0.1851,
                    metric_3: 0.8567,
                    metric_4: 0.7052,
                    metric_5: 0.7364,
                    metric_6: 0.3756,
                    metric_7: 0.7583,
                    metric_8: 0.9865
                }
            }
        },
        'object-change': {
            editPrompt: "Change one of the man to woman",
            targetPrompt: "One man and one woman are playing table tennis on a table with a net separating them in a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1103,
                    metric_2: 0.2213,
                    metric_3: 0.8835,
                    metric_4: 0.7787,
                    metric_5: 0.8307,
                    metric_6: 0.4383,
                    metric_7: 0.8618,
                    metric_8: 0.9873
                },
                method2: {
                    metric_1: 27.0876,
                    metric_2: 0.237,
                    metric_3: 0.8804,
                    metric_4: 0.9008,
                    metric_5: 0.7447,
                    metric_6: 0.2933,
                    metric_7: 0.7739,
                    metric_8: 0.9947
                },
                method3: {
                    metric_1: 26.6703,
                    metric_2: 0.2315,
                    metric_3: 0.8698,
                    metric_4: 0.8934,
                    metric_5: 0.8329,
                    metric_6: 0.3094,
                    metric_7: 0.8062,
                    metric_8: 0.9873
                },
                method4: {
                    metric_1: 24.6863,
                    metric_2: 0.2192,
                    metric_3: 0.8616,
                    metric_4: 0.7195,
                    metric_5: 0.6098,
                    metric_6: 0.2999,
                    metric_7: 0.7061,
                    metric_8: 0.9828
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a cloth placed on the net of the table",
            targetPrompt: "Two men are playing table tennis on a table with a net separating them and a cloth placed on the net in a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2957,
                    metric_2: 0.234,
                    metric_3: 0.8763,
                    metric_4: 0.7736,
                    metric_5: 0.8503,
                    metric_6: 0.4442,
                    metric_7: 0.877,
                    metric_8: 0.9869
                },
                method2: {
                    metric_1: 27.495,
                    metric_2: 0.2213,
                    metric_3: 0.878,
                    metric_4: 0.8775,
                    metric_5: 0.7361,
                    metric_6: 0.2953,
                    metric_7: 0.7612,
                    metric_8: 0.9942
                },
                method3: {
                    metric_1: 15.6466,
                    metric_2: 0.0617,
                    metric_3: 0.6794,
                    metric_4: 0.397,
                    metric_5: 0.7645,
                    metric_6: 0.4758,
                    metric_7: 0.8657,
                    metric_8: 0.8348
                },
                method4: {
                    metric_1: 26.9499,
                    metric_2: 0.2317,
                    metric_3: 0.8591,
                    metric_4: 0.6783,
                    metric_5: 0.7579,
                    metric_6: 0.3254,
                    metric_7: 0.7573,
                    metric_8: 0.9815
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the net of the table.",
            targetPrompt: "Two men are playing table tennis on a table without a net separating them in a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.1055,
                    metric_2: 0.2458,
                    metric_3: 0.8878,
                    metric_4: 0.7901,
                    metric_5: 0.8515,
                    metric_6: 0.4529,
                    metric_7: 0.8809,
                    metric_8: 0.9873
                },
                method2: {
                    metric_1: 28.5047,
                    metric_2: 0.25,
                    metric_3: 0.8865,
                    metric_4: 0.8706,
                    metric_5: 0.7433,
                    metric_6: 0.3062,
                    metric_7: 0.772,
                    metric_8: 0.994
                },
                method3: {
                    metric_1: 12.4349,
                    metric_2: 0.0368,
                    metric_3: 0.8136,
                    metric_4: 0.6512,
                    metric_5: 0.6685,
                    metric_6: 0.5009,
                    metric_7: 0.6938,
                    metric_8: 0.9706
                },
                method4: {
                    metric_1: 29.3939,
                    metric_2: 0.2477,
                    metric_3: 0.8601,
                    metric_4: 0.6863,
                    metric_5: 0.7938,
                    metric_6: 0.3483,
                    metric_7: 0.7896,
                    metric_8: 0.9809
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a park.",
            targetPrompt: "Two men are playing table tennis on a table with a net separating them in a park.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.8324,
                    metric_2: 0.2189,
                    metric_3: 0.8792,
                    metric_4: 0.6205,
                    metric_5: 0.8985,
                    metric_6: 0.4857,
                    metric_7: 0.8623,
                    metric_8: 0.9849
                },
                method2: {
                    metric_1: 24.652,
                    metric_2: 0.1741,
                    metric_3: 0.8809,
                    metric_4: 0.6559,
                    metric_5: 0.5992,
                    metric_6: 0.3715,
                    metric_7: 0.6763,
                    metric_8: 0.9917
                },
                method3: {
                    metric_1: 22.8853,
                    metric_2: 0.153,
                    metric_3: 0.8074,
                    metric_4: 0.3911,
                    metric_5: 0.7542,
                    metric_6: 0.5305,
                    metric_7: 0.8096,
                    metric_8: 0.9371
                },
                method4: {
                    metric_1: 27.9249,
                    metric_2: 0.2185,
                    metric_3: 0.8616,
                    metric_4: 0.57,
                    metric_5: 0.4518,
                    metric_6: 0.1963,
                    metric_7: 0.5269,
                    metric_8: 0.9776
                }
            }
        },
        stylization: {
            editPrompt: "Make it a watercolor painting.",
            targetPrompt: "Render two men are playing table tennis on a table with a net separating them in a gym, in a watercolor painting.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0011/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0011/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0011/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0011/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.0505,
                    metric_2: 0.1977,
                    metric_3: 0.8803,
                    metric_4: 0.7571,
                    metric_5: 0.6277,
                    metric_6: 0.3858,
                    metric_7: 0.6426,
                    metric_8: 0.9887
                },
                method2: {
                    metric_1: 22.4937,
                    metric_2: 0.1863,
                    metric_3: 0.8859,
                    metric_4: 0.7977,
                    metric_5: 0.6448,
                    metric_6: 0.2745,
                    metric_7: 0.6982,
                    metric_8: 0.9931
                },
                method3: {
                    metric_1: 32.6111,
                    metric_2: 0.2455,
                    metric_3: 0.8452,
                    metric_4: 0.6406,
                    metric_5: 0.5366,
                    metric_6: 0.4727,
                    metric_7: 0.6626,
                    metric_8: 0.9577
                },
                method4: {
                    metric_1: 30.456,
                    metric_2: 0.2695,
                    metric_3: 0.8446,
                    metric_4: 0.706,
                    metric_5: 0.608,
                    metric_6: 0.4398,
                    metric_7: 0.6221,
                    metric_8: 0.9778
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/sport activity_0016/input.mp4",
    category: "Sport activity",
    originalCaption: "A girl doing gymnastics on a blue carpet on a gymnastics floor inside a gym.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the girl practice cheerleading.",
            targetPrompt: "A girl is practicing cheerleading on a blue carpet on a gymnastics floor inside a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.8679,
                    metric_2: 0.2748,
                    metric_3: 0.8963,
                    metric_4: 0.8157,
                    metric_5: 0.8209,
                    metric_6: 0.3965,
                    metric_7: 0.8403,
                    metric_8: 0.9763
                },
                method2: {
                    metric_1: 28.3467,
                    metric_2: 0.2912,
                    metric_3: 0.9069,
                    metric_4: 0.8734,
                    metric_5: 0.7564,
                    metric_6: 0.3869,
                    metric_7: 0.7983,
                    metric_8: 0.9905
                },
                method3: {
                    metric_1: 23.1363,
                    metric_2: 0.2083,
                    metric_3: 0.7627,
                    metric_4: 0.5588,
                    metric_5: 0.7531,
                    metric_6: 0.5365,
                    metric_7: 0.7959,
                    metric_8: 0.9054
                },
                method4: {
                    metric_1: 28.7553,
                    metric_2: 0.2763,
                    metric_3: 0.8505,
                    metric_4: 0.6586,
                    metric_5: 0.7125,
                    metric_6: 0.3199,
                    metric_7: 0.728,
                    metric_8: 0.9691
                }
            }
        },
        'object-change': {
            editPrompt: "Change the girl to a boy.",
            targetPrompt: "A boy doing gymnastics on a blue carpet on a gymnastics floor inside a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.4519,
                    metric_2: 0.2527,
                    metric_3: 0.9044,
                    metric_4: 0.8187,
                    metric_5: 0.8432,
                    metric_6: 0.4045,
                    metric_7: 0.8647,
                    metric_8: 0.9765
                },
                method2: {
                    metric_1: 30.2843,
                    metric_2: 0.2797,
                    metric_3: 0.9147,
                    metric_4: 0.9034,
                    metric_5: 0.7522,
                    metric_6: 0.3549,
                    metric_7: 0.8047,
                    metric_8: 0.9911
                },
                method3: {
                    metric_1: 30.6891,
                    metric_2: 0.2781,
                    metric_3: 0.9239,
                    metric_4: 0.8767,
                    metric_5: 0.7712,
                    metric_6: 0.3564,
                    metric_7: 0.7969,
                    metric_8: 0.9724
                },
                method4: {
                    metric_1: 30.3789,
                    metric_2: 0.267,
                    metric_3: 0.8498,
                    metric_4: 0.624,
                    metric_5: 0.7485,
                    metric_6: 0.3486,
                    metric_7: 0.7427,
                    metric_8: 0.9693
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a basketball next to the girl.",
            targetPrompt: "A girl doing gymnastics on a blue carpet on a gymnastics floor inside a gym with a basketball placed next to her.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1563,
                    metric_2: 0.2459,
                    metric_3: 0.8937,
                    metric_4: 0.814,
                    metric_5: 0.8985,
                    metric_6: 0.4181,
                    metric_7: 0.8882,
                    metric_8: 0.9758
                },
                method2: {
                    metric_1: 28.6556,
                    metric_2: 0.2829,
                    metric_3: 0.9165,
                    metric_4: 0.8732,
                    metric_5: 0.788,
                    metric_6: 0.3806,
                    metric_7: 0.8223,
                    metric_8: 0.9895
                },
                method3: {
                    metric_1: 25.9013,
                    metric_2: 0.2318,
                    metric_3: 0.7859,
                    metric_4: 0.6885,
                    metric_5: 0.8553,
                    metric_6: 0.5272,
                    metric_7: 0.8237,
                    metric_8: 0.9484
                },
                method4: {
                    metric_1: 27.1709,
                    metric_2: 0.248,
                    metric_3: 0.8355,
                    metric_4: 0.6381,
                    metric_5: 0.7443,
                    metric_6: 0.3786,
                    metric_7: 0.7422,
                    metric_8: 0.9672
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the blue carpet.",
            targetPrompt: "A girl doing gymnastics on a gymnastics floor with no carpet inside a gym.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.8142,
                    metric_2: 0.2394,
                    metric_3: 0.921,
                    metric_4: 0.8263,
                    metric_5: 0.816,
                    metric_6: 0.403,
                    metric_7: 0.8472,
                    metric_8: 0.9791
                },
                method2: {
                    metric_1: 28.1124,
                    metric_2: 0.2395,
                    metric_3: 0.9226,
                    metric_4: 0.8837,
                    metric_5: 0.7193,
                    metric_6: 0.3221,
                    metric_7: 0.771,
                    metric_8: 0.9913
                },
                method3: {
                    metric_1: 19.1441,
                    metric_2: 0.1211,
                    metric_3: 0.862,
                    metric_4: 0.6222,
                    metric_5: 0.5765,
                    metric_6: 0.3727,
                    metric_7: 0.6714,
                    metric_8: 0.9608
                },
                method4: {
                    metric_1: 28.9545,
                    metric_2: 0.244,
                    metric_3: 0.8442,
                    metric_4: 0.6286,
                    metric_5: 0.8024,
                    metric_6: 0.4234,
                    metric_7: 0.7773,
                    metric_8: 0.9694
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a park.",
            targetPrompt: "A girl doing gymnastics on a blue carpet on a gymnastics floor in a park.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.101,
                    metric_2: 0.2455,
                    metric_3: 0.9098,
                    metric_4: 0.7791,
                    metric_5: 0.8273,
                    metric_6: 0.4109,
                    metric_7: 0.834,
                    metric_8: 0.9768
                },
                method2: {
                    metric_1: 27.6738,
                    metric_2: 0.2321,
                    metric_3: 0.9145,
                    metric_4: 0.802,
                    metric_5: 0.6458,
                    metric_6: 0.2847,
                    metric_7: 0.73,
                    metric_8: 0.99
                },
                method3: {
                    metric_1: 22.2051,
                    metric_2: 0.1582,
                    metric_3: 0.7668,
                    metric_4: 0.3859,
                    metric_5: 0.7404,
                    metric_6: 0.5001,
                    metric_7: 0.7676,
                    metric_8: 0.9284
                },
                method4: {
                    metric_1: 30.3158,
                    metric_2: 0.2699,
                    metric_3: 0.7977,
                    metric_4: 0.616,
                    metric_5: 0.6355,
                    metric_6: 0.3318,
                    metric_7: 0.6963,
                    metric_8: 0.9688
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a vibrant, impressionist painting style.",
            targetPrompt: "A girl doing gymnastics on a blue carpet on a gymnastics floor inside a gym, is depicted in a vibrant, impressionist painting style.",
            resultVideos: {
                method1: "VEditBench-Long/sport activity_0016/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/sport activity_0016/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/sport activity_0016/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/sport activity_0016/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 34.4351,
                    metric_2: 0.2842,
                    metric_3: 0.9152,
                    metric_4: 0.6915,
                    metric_5: 0.5985,
                    metric_6: 0.3835,
                    metric_7: 0.6504,
                    metric_8: 0.9778
                },
                method2: {
                    metric_1: 30.0438,
                    metric_2: 0.2613,
                    metric_3: 0.9069,
                    metric_4: 0.6671,
                    metric_5: 0.4483,
                    metric_6: 0.2423,
                    metric_7: 0.5259,
                    metric_8: 0.9866
                },
                method3: {
                    metric_1: 33.7189,
                    metric_2: 0.2886,
                    metric_3: 0.8623,
                    metric_4: 0.5729,
                    metric_5: 0.2073,
                    metric_6: 0.3773,
                    metric_7: 0.3562,
                    metric_8: 0.9645
                },
                method4: {
                    metric_1: 30.2269,
                    metric_2: 0.3071,
                    metric_3: 0.7798,
                    metric_4: 0.5876,
                    metric_5: 0.3966,
                    metric_6: 0.4263,
                    metric_7: 0.4756,
                    metric_8: 0.9692
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/technology_0002/input.mp4",
    category: "Technology",
    originalCaption: "A person is fitting a fan to a computer case.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the person tightening a screw.",
            targetPrompt: "A person is fitting a fan to a computer case and tightening a screw.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.0532,
                    metric_2: 0.2771,
                    metric_3: 0.8588,
                    metric_4: 0.8199,
                    metric_5: 0.8257,
                    metric_6: 0.4,
                    metric_7: 0.9399,
                    metric_8: 0.979
                },
                method2: {
                    metric_1: 27.838,
                    metric_2: 0.2703,
                    metric_3: 0.871,
                    metric_4: 0.9019,
                    metric_5: 0.9237,
                    metric_6: 0.374,
                    metric_7: 0.9189,
                    metric_8: 0.9878
                },
                method3: {
                    metric_1: 16.1239,
                    metric_2: 0.1039,
                    metric_3: 0.7564,
                    metric_4: 0.395,
                    metric_5: 0.6269,
                    metric_6: 0.4622,
                    metric_7: 0.8022,
                    metric_8: 0.8387
                },
                method4: {
                    metric_1: 27.3438,
                    metric_2: 0.2756,
                    metric_3: 0.8227,
                    metric_4: 0.6342,
                    metric_5: 0.7782,
                    metric_6: 0.3193,
                    metric_7: 0.7876,
                    metric_8: 0.9728
                }
            }
        },
        'object-change': {
            editPrompt: "Change the fan to a graphics card.",
            targetPrompt: "A person is fitting a graphics card to a computer case.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1395,
                    metric_2: 0.2503,
                    metric_3: 0.8691,
                    metric_4: 0.794,
                    metric_5: 0.9226,
                    metric_6: 0.4601,
                    metric_7: 0.9565,
                    metric_8: 0.9773
                },
                method2: {
                    metric_1: 26.4981,
                    metric_2: 0.2439,
                    metric_3: 0.8683,
                    metric_4: 0.9014,
                    metric_5: 0.9048,
                    metric_6: 0.3899,
                    metric_7: 0.9116,
                    metric_8: 0.9882
                },
                method3: {
                    metric_1: 21.4741,
                    metric_2: 0.1801,
                    metric_3: 0.7317,
                    metric_4: 0.2965,
                    metric_5: 0.7546,
                    metric_6: 0.3659,
                    metric_7: 0.8369,
                    metric_8: 0.82
                },
                method4: {
                    metric_1: 26.1572,
                    metric_2: 0.254,
                    metric_3: 0.8524,
                    metric_4: 0.6154,
                    metric_5: 0.853,
                    metric_6: 0.4091,
                    metric_7: 0.9126,
                    metric_8: 0.976
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a swatch onto his left hand.",
            targetPrompt: "A person is fitting a fan to a computer case with a screwdriver in their hand.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 31.1318,
                    metric_2: 0.2883,
                    metric_3: 0.8491,
                    metric_4: 0.8205,
                    metric_5: 0.8475,
                    metric_6: 0.4062,
                    metric_7: 0.9326,
                    metric_8: 0.9788
                },
                method2: {
                    metric_1: 29.8736,
                    metric_2: 0.2863,
                    metric_3: 0.8711,
                    metric_4: 0.8991,
                    metric_5: 0.8617,
                    metric_6: 0.3512,
                    metric_7: 0.8657,
                    metric_8: 0.9876
                },
                method3: {
                    metric_1: 14.2435,
                    metric_2: -0.0151,
                    metric_3: 0.7132,
                    metric_4: 0.4822,
                    metric_5: 0.7019,
                    metric_6: 0.2945,
                    metric_7: 0.7622,
                    metric_8: 0.8892
                },
                method4: {
                    metric_1: 27.5849,
                    metric_2: 0.2822,
                    metric_3: 0.8314,
                    metric_4: 0.6461,
                    metric_5: 0.7724,
                    metric_6: 0.32,
                    metric_7: 0.7832,
                    metric_8: 0.9719
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the computer case.",
            targetPrompt: "A person is holding a computer fan in the air with both hands, gently moving it back and forth.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.4498,
                    metric_2: 0.2191,
                    metric_3: 0.8588,
                    metric_4: 0.8235,
                    metric_5: 0.8213,
                    metric_6: 0.3955,
                    metric_7: 0.9355,
                    metric_8: 0.9817
                },
                method2: {
                    metric_1: 23.8442,
                    metric_2: 0.2122,
                    metric_3: 0.8736,
                    metric_4: 0.9259,
                    metric_5: 0.9009,
                    metric_6: 0.3709,
                    metric_7: 0.9014,
                    metric_8: 0.9884
                },
                method3: {
                    metric_1: 12.1629,
                    metric_2: 0.0448,
                    metric_3: 0.7763,
                    metric_4: 0.5221,
                    metric_5: 0.6281,
                    metric_6: 0.6646,
                    metric_7: 0.8193,
                    metric_8: 0.9056
                },
                method4: {
                    metric_1: 23.8623,
                    metric_2: 0.2364,
                    metric_3: 0.8313,
                    metric_4: 0.6101,
                    metric_5: 0.7188,
                    metric_6: 0.3609,
                    metric_7: 0.811,
                    metric_8: 0.9739
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a workshop.",
            targetPrompt: "A person is fitting a fan to a computer case in a workshop.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.2763,
                    metric_2: 0.2585,
                    metric_3: 0.8171,
                    metric_4: 0.8057,
                    metric_5: 0.8849,
                    metric_6: 0.4485,
                    metric_7: 0.958,
                    metric_8: 0.9768
                },
                method2: {
                    metric_1: 25.8827,
                    metric_2: 0.2504,
                    metric_3: 0.87,
                    metric_4: 0.8526,
                    metric_5: 0.8881,
                    metric_6: 0.3548,
                    metric_7: 0.873,
                    metric_8: 0.9876
                },
                method3: {
                    metric_1: 10.708,
                    metric_2: 0.0155,
                    metric_3: 0.6969,
                    metric_4: 0.23,
                    metric_5: 0.7655,
                    metric_6: 0.4948,
                    metric_7: 0.7368,
                    metric_8: 0.8569
                },
                method4: {
                    metric_1: 25.8309,
                    metric_2: 0.2586,
                    metric_3: 0.8445,
                    metric_4: 0.657,
                    metric_5: 0.7723,
                    metric_6: 0.2963,
                    metric_7: 0.7944,
                    metric_8: 0.9775
                }
            }
        },
        stylization: {
            editPrompt: "Render it in a macro photography style.",
            targetPrompt: "Render a person is fitting a fan to a computer case in a macro photography style.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0002/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0002/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0002/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0002/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.3154,
                    metric_2: 0.2616,
                    metric_3: 0.8531,
                    metric_4: 0.8319,
                    metric_5: 0.9222,
                    metric_6: 0.4788,
                    metric_7: 0.9668,
                    metric_8: 0.9809
                },
                method2: {
                    metric_1: 28.9775,
                    metric_2: 0.2623,
                    metric_3: 0.8676,
                    metric_4: 0.8326,
                    metric_5: 0.8534,
                    metric_6: 0.3616,
                    metric_7: 0.8545,
                    metric_8: 0.9827
                },
                method3: {
                    metric_1: 24.4759,
                    metric_2: 0.2656,
                    metric_3: 0.8403,
                    metric_4: 0.3516,
                    metric_5: 0.6087,
                    metric_6: 0.4335,
                    metric_7: 0.647,
                    metric_8: 0.9447
                },
                method4: {
                    metric_1: 27.6618,
                    metric_2: 0.2703,
                    metric_3: 0.8407,
                    metric_4: 0.6323,
                    metric_5: 0.8194,
                    metric_6: 0.4088,
                    metric_7: 0.8408,
                    metric_8: 0.9755
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/technology_0008/input.mp4",
    category: "Technology",
    originalCaption: "A man is sitting at a desk and turning on a smartphone in his hand, displaying its homepage by swiping the screen. Then, he removes the back panel, revealing the components inside the smartphone. A keyboard, mouse, and other items are cluttered on his table.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the man standing.",
            targetPrompt: "A man is standing at a desk, turning on a smartphone in his hand, showing its homepage by swiping it, and then taking off the back panel to reveal the components inside the smartphone. A keyboard, mouse, and other items are cluttered on his table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.5968,
                    metric_2: 0.1887,
                    metric_3: 0.922,
                    metric_4: 0.6975,
                    metric_5: 0.6276,
                    metric_6: 0.2554,
                    metric_7: 0.6797,
                    metric_8: 0.9695
                },
                method2: {
                    metric_1: 25.9345,
                    metric_2: 0.1922,
                    metric_3: 0.9438,
                    metric_4: 0.9097,
                    metric_5: 0.7583,
                    metric_6: 0.2754,
                    metric_7: 0.7944,
                    metric_8: 0.9843
                },
                method3: {
                    metric_1: 13.754,
                    metric_2: 0.1087,
                    metric_3: 0.7137,
                    metric_4: 0.4411,
                    metric_5: 0.95,
                    metric_6: 0.7632,
                    metric_7: 0.9351,
                    metric_8: 0.8883
                },
                method4: {
                    metric_1: 26.9306,
                    metric_2: 0.2092,
                    metric_3: 0.8899,
                    metric_4: 0.5594,
                    metric_5: 0.3523,
                    metric_6: 0.1214,
                    metric_7: 0.488,
                    metric_8: 0.9694
                }
            }
        },
        'object-change': {
            editPrompt: "Change the smartphone to a tablet.",
            targetPrompt: "A man is sitting at a desk, turning on a tablet in his hand and showing its homepage by swiping it, then he takes off the back panel to reveal the components inside the tablet.  A keyboard, mouse, and other items are cluttered on his table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 21.6381,
                    metric_2: 0.1485,
                    metric_3: 0.9243,
                    metric_4: 0.6835,
                    metric_5: 0.6868,
                    metric_6: 0.2856,
                    metric_7: 0.7222,
                    metric_8: 0.9711
                },
                method2: {
                    metric_1: 21.3391,
                    metric_2: 0.1304,
                    metric_3: 0.935,
                    metric_4: 0.8833,
                    metric_5: 0.779,
                    metric_6: 0.3004,
                    metric_7: 0.8418,
                    metric_8: 0.9839
                },
                method3: {
                    metric_1: 21.3218,
                    metric_2: 0.1561,
                    metric_3: 0.5876,
                    metric_4: 0.2807,
                    metric_5: 0.4534,
                    metric_6: 0.419,
                    metric_7: 0.5845,
                    metric_8: 0.7657
                },
                method4: {
                    metric_1: 22.8172,
                    metric_2: 0.2023,
                    metric_3: 0.8723,
                    metric_4: 0.5545,
                    metric_5: 0.3595,
                    metric_6: 0.1997,
                    metric_7: 0.4724,
                    metric_8: 0.9694
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a coffee mug on the desk.",
            targetPrompt: "A man is sitting at a desk with a coffee mug in front of him, turning on a smartphone in his hand and displaying its homepage by swiping the screen. Then, he removes the back panel, revealing the components inside the smartphone. A keyboard, mouse, and other items are cluttered on the table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.2984,
                    metric_2: 0.1704,
                    metric_3: 0.9247,
                    metric_4: 0.6835,
                    metric_5: 0.4208,
                    metric_6: 0.1859,
                    metric_7: 0.5137,
                    metric_8: 0.9675
                },
                method2: {
                    metric_1: 25.9876,
                    metric_2: 0.1618,
                    metric_3: 0.9442,
                    metric_4: 0.8925,
                    metric_5: 0.7759,
                    metric_6: 0.3005,
                    metric_7: 0.814,
                    metric_8: 0.9846
                },
                method3: {
                    metric_1: 17.5298,
                    metric_2: 0.123,
                    metric_3: 0.613,
                    metric_4: 0.333,
                    metric_5: 0.8717,
                    metric_6: 0.5451,
                    metric_7: 0.9082,
                    metric_8: 0.8122
                },
                method4: {
                    metric_1: 25.1243,
                    metric_2: 0.1843,
                    metric_3: 0.8908,
                    metric_4: 0.5378,
                    metric_5: 0.2724,
                    metric_6: 0.0727,
                    metric_7: 0.3452,
                    metric_8: 0.9669
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the keyboard.",
            targetPrompt: "A man is sitting at a desk, turning on a smartphone in his hand and showing its homepage by swiping it, then he removes the back panel to reveal the components inside the smartphone.  A mouse, and other items but not a keyboard are cluttered on his table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.1126,
                    metric_2: 0.1498,
                    metric_3: 0.9237,
                    metric_4: 0.6872,
                    metric_5: 0.5091,
                    metric_6: 0.204,
                    metric_7: 0.6533,
                    metric_8: 0.9704
                },
                method2: {
                    metric_1: 26.4837,
                    metric_2: 0.1515,
                    metric_3: 0.9457,
                    metric_4: 0.9099,
                    metric_5: 0.7615,
                    metric_6: 0.2822,
                    metric_7: 0.7949,
                    metric_8: 0.9851
                },
                method3: {
                    metric_1: 8.9536,
                    metric_2: 0.032,
                    metric_3: 0.5471,
                    metric_4: 0.3323,
                    metric_5: 0.2966,
                    metric_6: 0.6421,
                    metric_7: 0.6118,
                    metric_8: 0.9119
                },
                method4: {
                    metric_1: 27.4274,
                    metric_2: 0.1805,
                    metric_3: 0.8796,
                    metric_4: 0.558,
                    metric_5: 0.406,
                    metric_6: 0.1942,
                    metric_7: 0.5728,
                    metric_8: 0.9703
                }
            }
        },
        'scene-change': {
            editPrompt: "Make the scene in a library.",
            targetPrompt: "A man is sitting at a desk in a library, turning on a smartphone in his hand, showing its homepage by swiping it, and then he takes off the back panel to reveal the components inside the smartphone. A keyboard, mouse, and other items are cluttered on his table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.8798,
                    metric_2: 0.1214,
                    metric_3: 0.9297,
                    metric_4: 0.7025,
                    metric_5: 0.6012,
                    metric_6: 0.2358,
                    metric_7: 0.6665,
                    metric_8: 0.9676
                },
                method2: {
                    metric_1: 25.2746,
                    metric_2: 0.1172,
                    metric_3: 0.9428,
                    metric_4: 0.8557,
                    metric_5: 0.7573,
                    metric_6: 0.29,
                    metric_7: 0.8057,
                    metric_8: 0.9852
                },
                method3: {
                    metric_1: 16.3251,
                    metric_2: 0.1073,
                    metric_3: 0.7097,
                    metric_4: 0.2219,
                    metric_5: 0.7439,
                    metric_6: 0.7103,
                    metric_7: 0.7793,
                    metric_8: 0.8944
                },
                method4: {
                    metric_1: 27.0829,
                    metric_2: 0.1254,
                    metric_3: 0.8709,
                    metric_4: 0.5515,
                    metric_5: 0.2864,
                    metric_6: 0.112,
                    metric_7: 0.4353,
                    metric_8: 0.9705
                }
            }
        },
        stylization: {
            editPrompt: "Make it in a watercolor style.",
            targetPrompt: "A man is sitting at a desk and turning on a smartphone in his hand, showing its homepage by swiping it Then he took off the back panel, showing the component inside the smartphone, with a  keyboard, mouse, and other items are cluttered on his table. This is depicted in a watercolor style.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0008/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0008/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0008/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0008/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 29.8006,
                    metric_2: 0.1299,
                    metric_3: 0.9203,
                    metric_4: 0.593,
                    metric_5: 0.5083,
                    metric_6: 0.2557,
                    metric_7: 0.5229,
                    metric_8: 0.9712
                },
                method2: {
                    metric_1: 25.3206,
                    metric_2: 0.1485,
                    metric_3: 0.9293,
                    metric_4: 0.727,
                    metric_5: 0.5569,
                    metric_6: 0.2049,
                    metric_7: 0.604,
                    metric_8: 0.9819
                },
                method3: {
                    metric_1: 28.3008,
                    metric_2: 0.1107,
                    metric_3: 0.9093,
                    metric_4: 0.4128,
                    metric_5: 0.2218,
                    metric_6: 0.174,
                    metric_7: 0.259,
                    metric_8: 0.9314
                },
                method4: {
                    metric_1: 30.5385,
                    metric_2: 0.1593,
                    metric_3: 0.851,
                    metric_4: 0.5318,
                    metric_5: 0.4215,
                    metric_6: 0.2664,
                    metric_7: 0.457,
                    metric_8: 0.9606
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/technology_0018/input.mp4",
    category: "Technology",
    originalCaption: "Two hands are shown typing on a typewriter placed on a table, with a sheet of paper inserted, and the text appearing on the paper as typing takes place.",
    editTypes: {
        'motion-change': {
            editPrompt: "Have one hand resting on the typewriter while the other hand quickly presses all the keys in a row, one after another.",
            targetPrompt: "One hand is resting on a typewriter placed on a table, with a sheet of white paper already inserted. The other hand quickly presses all the keys in a row, one after another, and text appears on the paper as the typing happens.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.8088,
                    metric_2: 0.2027,
                    metric_3: 0.8928,
                    metric_4: 0.8004,
                    metric_5: 0.431,
                    metric_6: 0.3053,
                    metric_7: 0.4871,
                    metric_8: 0.9788
                },
                method2: {
                    metric_1: 28.9253,
                    metric_2: 0.2058,
                    metric_3: 0.8948,
                    metric_4: 0.8609,
                    metric_5: 0.9349,
                    metric_6: 0.5679,
                    metric_7: 0.8833,
                    metric_8: 0.9907
                },
                method3: {
                    metric_1: 27.5851,
                    metric_2: 0.1839,
                    metric_3: 0.7879,
                    metric_4: 0.2786,
                    metric_5: 0.6716,
                    metric_6: 0.7417,
                    metric_7: 0.856,
                    metric_8: 0.8117
                },
                method4: {
                    metric_1: 25.7838,
                    metric_2: 0.2005,
                    metric_3: 0.8549,
                    metric_4: 0.6723,
                    metric_5: 0.7331,
                    metric_6: 0.5982,
                    metric_7: 0.7769,
                    metric_8: 0.9762
                }
            }
        },
        'object-change': {
            editPrompt: "Change the typewriter to a laptop.",
            targetPrompt: "Two hands are shown typing on a laptop placed on a table.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.8336,
                    metric_2: 0.1613,
                    metric_3: 0.8926,
                    metric_4: 0.8354,
                    metric_5: 0.9041,
                    metric_6: 0.6064,
                    metric_7: 0.9146,
                    metric_8: 0.9782
                },
                method2: {
                    metric_1: 21.5233,
                    metric_2: 0.1472,
                    metric_3: 0.8964,
                    metric_4: 0.8151,
                    metric_5: 0.7759,
                    metric_6: 0.4885,
                    metric_7: 0.7798,
                    metric_8: 0.9919
                },
                method3: {
                    metric_1: 21.4526,
                    metric_2: 0.1458,
                    metric_3: 0.7697,
                    metric_4: 0.3403,
                    metric_5: 0.7473,
                    metric_6: 0.5352,
                    metric_7: 0.8984,
                    metric_8: 0.8401
                },
                method4: {
                    metric_1: 22.5901,
                    metric_2: 0.1753,
                    metric_3: 0.8524,
                    metric_4: 0.6236,
                    metric_5: 0.7043,
                    metric_6: 0.5421,
                    metric_7: 0.7754,
                    metric_8: 0.9748
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a coffee cup next to the typewriter.",
            targetPrompt: "Two hands are shown typing on a typewriter placed on a table, with a sheet of paper inserted, and the text appearing on the paper as typing takes place, with a coffee cup next to the typewriter.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.1143,
                    metric_2: 0.2437,
                    metric_3: 0.8925,
                    metric_4: 0.8461,
                    metric_5: 0.7579,
                    metric_6: 0.5561,
                    metric_7: 0.812,
                    metric_8: 0.9772
                },
                method2: {
                    metric_1: 27.0939,
                    metric_2: 0.2557,
                    metric_3: 0.8935,
                    metric_4: 0.8832,
                    metric_5: 0.9141,
                    metric_6: 0.5347,
                    metric_7: 0.8486,
                    metric_8: 0.9915
                },
                method3: {
                    metric_1: 24.5398,
                    metric_2: 0.1981,
                    metric_3: 0.7442,
                    metric_4: 0.3417,
                    metric_5: 0.9039,
                    metric_6: 0.6335,
                    metric_7: 0.9043,
                    metric_8: 0.8523
                },
                method4: {
                    metric_1: 24.782,
                    metric_2: 0.24,
                    metric_3: 0.8441,
                    metric_4: 0.6164,
                    metric_5: 0.6869,
                    metric_6: 0.548,
                    metric_7: 0.7158,
                    metric_8: 0.9722
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the paper.",
            targetPrompt: "Two hands are shown typing on a typewriter placed on a table, with no sheet of paper inserted.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.2389,
                    metric_2: 0.2552,
                    metric_3: 0.8905,
                    metric_4: 0.8498,
                    metric_5: 0.6982,
                    metric_6: 0.5104,
                    metric_7: 0.7495,
                    metric_8: 0.9772
                },
                method2: {
                    metric_1: 29.0412,
                    metric_2: 0.2624,
                    metric_3: 0.9078,
                    metric_4: 0.9368,
                    metric_5: 0.8671,
                    metric_6: 0.5032,
                    metric_7: 0.8081,
                    metric_8: 0.9918
                },
                method3: {
                    metric_1: 3.0838,
                    metric_2: -0.0399,
                    metric_3: 0.7615,
                    metric_4: 0.4938,
                    metric_5: 0.3456,
                    metric_6: 0.6086,
                    metric_7: 0.6465,
                    metric_8: 0.955
                },
                method4: {
                    metric_1: 25.3894,
                    metric_2: 0.2459,
                    metric_3: 0.8582,
                    metric_4: 0.6282,
                    metric_5: 0.7024,
                    metric_6: 0.5825,
                    metric_7: 0.7388,
                    metric_8: 0.9693
                }
            }
        },
        'scene-change': {
            editPrompt: "Change the setting to a park.",
            targetPrompt: "Two hands are shown typing on a typewriter placed on a table in a park, with a sheet of paper inserted, and the text appearing on the paper as typing takes place.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.5669,
                    metric_2: 0.2086,
                    metric_3: 0.8904,
                    metric_4: 0.7972,
                    metric_5: 0.7499,
                    metric_6: 0.6341,
                    metric_7: 0.7969,
                    metric_8: 0.9776
                },
                method2: {
                    metric_1: 28.2314,
                    metric_2: 0.2227,
                    metric_3: 0.9011,
                    metric_4: 0.8068,
                    metric_5: 0.8091,
                    metric_6: 0.609,
                    metric_7: 0.8159,
                    metric_8: 0.9913
                },
                method3: {
                    metric_1: 25.0075,
                    metric_2: 0.2252,
                    metric_3: 0.845,
                    metric_4: 0.5917,
                    metric_5: 0.482,
                    metric_6: 0.5308,
                    metric_7: 0.6436,
                    metric_8: 0.9709
                },
                method4: {
                    metric_1: 25.8573,
                    metric_2: 0.2121,
                    metric_3: 0.8721,
                    metric_4: 0.5843,
                    metric_5: 0.6492,
                    metric_6: 0.5575,
                    metric_7: 0.688,
                    metric_8: 0.9706
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a black-and-white photograph style.",
            targetPrompt: "Render two hands are shown typing on a typewriter placed on a table, with a sheet of paper inserted, and the text appearing on the paper as typing takes place in a black-and-white photograph style.",
            resultVideos: {
                method1: "VEditBench-Long/technology_0018/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/technology_0018/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/technology_0018/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/technology_0018/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.5424,
                    metric_2: 0.2105,
                    metric_3: 0.8906,
                    metric_4: 0.7584,
                    metric_5: 0.6925,
                    metric_6: 0.5706,
                    metric_7: 0.7349,
                    metric_8: 0.9791
                },
                method2: {
                    metric_1: 27.5078,
                    metric_2: 0.1996,
                    metric_3: 0.8929,
                    metric_4: 0.8449,
                    metric_5: 0.7555,
                    metric_6: 0.5873,
                    metric_7: 0.772,
                    metric_8: 0.9915
                },
                method3: {
                    metric_1: 26.9264,
                    metric_2: 0.2027,
                    metric_3: 0.8941,
                    metric_4: 0.8386,
                    metric_5: 0.7466,
                    metric_6: 0.615,
                    metric_7: 0.7842,
                    metric_8: 0.9748
                },
                method4: {
                    metric_1: 27.0719,
                    metric_2: 0.2079,
                    metric_3: 0.8761,
                    metric_4: 0.6262,
                    metric_5: 0.6523,
                    metric_6: 0.5572,
                    metric_7: 0.6567,
                    metric_8: 0.9701
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/vehicle_0007/input.mp4",
    category: "Vehicle",
    originalCaption: "An inbound train travels along a snowy track, with a bridge visible in the background where a truck is driving. The camera pans from left to right, capturing the scene.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the train stop after moving for some time.",
            targetPrompt: "An inbound train moves along a snowy track and briefly stops, while in the background, a truck drives across a visible bridge. The camera pans from left to right, capturing the entire scene.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1585,
                    metric_2: 0.2162,
                    metric_3: 0.8602,
                    metric_4: 0.8522,
                    metric_5: 0.6327,
                    metric_6: 0.4816,
                    metric_7: 0.7373,
                    metric_8: 0.9763
                },
                method2: {
                    metric_1: 23.8394,
                    metric_2: 0.2225,
                    metric_3: 0.8548,
                    metric_4: 0.8653,
                    metric_5: 0.5575,
                    metric_6: 0.4055,
                    metric_7: 0.6982,
                    metric_8: 0.9925
                },
                method3: {
                    metric_1: 27.4403,
                    metric_2: 0.22,
                    metric_3: 0.4722,
                    metric_4: 0.6885,
                    metric_5: 0.6825,
                    metric_6: 0.622,
                    metric_7: 0.7529,
                    metric_8: 0.9304
                },
                method4: {
                    metric_1: 29.406,
                    metric_2: 0.2438,
                    metric_3: 0.7253,
                    metric_4: 0.7351,
                    metric_5: 0.3665,
                    metric_6: 0.3079,
                    metric_7: 0.4585,
                    metric_8: 0.9745
                }
            }
        },
        'object-change': {
            editPrompt: "Change the train to a bus.",
            targetPrompt: "An inbound bus travels along a snowy track, with a bridge visible in the background where a truck is driving. The camera pans from left to right, capturing the scene.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.6401,
                    metric_2: 0.2241,
                    metric_3: 0.8783,
                    metric_4: 0.8556,
                    metric_5: 0.5543,
                    metric_6: 0.3898,
                    metric_7: 0.6621,
                    metric_8: 0.979
                },
                method2: {
                    metric_1: 27.5486,
                    metric_2: 0.2145,
                    metric_3: 0.842,
                    metric_4: 0.8914,
                    metric_5: 0.6075,
                    metric_6: 0.4207,
                    metric_7: 0.7173,
                    metric_8: 0.9922
                },
                method3: {
                    metric_1: 23.9642,
                    metric_2: 0.1438,
                    metric_3: 0.639,
                    metric_4: 0.7373,
                    metric_5: 0.7988,
                    metric_6: 0.7858,
                    metric_7: 0.8516,
                    metric_8: 0.9448
                },
                method4: {
                    metric_1: 26.3235,
                    metric_2: 0.2616,
                    metric_3: 0.6343,
                    metric_4: 0.75,
                    metric_5: 0.3667,
                    metric_6: 0.1296,
                    metric_7: 0.4106,
                    metric_8: 0.9752
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a snowman beside the track.",
            targetPrompt: "An inbound train travels along a snowy track, with a bridge visible in the background where a truck is driving. The camera pans from left to right, capturing the scene, with a snowman beside the track.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.4789,
                    metric_2: 0.2179,
                    metric_3: 0.8628,
                    metric_4: 0.8596,
                    metric_5: 0.5826,
                    metric_6: 0.4386,
                    metric_7: 0.6978,
                    metric_8: 0.9776
                },
                method2: {
                    metric_1: 27.9677,
                    metric_2: 0.2206,
                    metric_3: 0.8525,
                    metric_4: 0.9076,
                    metric_5: 0.5814,
                    metric_6: 0.4612,
                    metric_7: 0.6333,
                    metric_8: 0.9932
                },
                method3: {
                    metric_1: 26.0333,
                    metric_2: 0.1283,
                    metric_3: 0.7049,
                    metric_4: 0.7426,
                    metric_5: 0.7291,
                    metric_6: 0.5751,
                    metric_7: 0.6821,
                    metric_8: 0.9573
                },
                method4: {
                    metric_1: 28.385,
                    metric_2: 0.233,
                    metric_3: 0.7821,
                    metric_4: 0.739,
                    metric_5: 0.3195,
                    metric_6: 0.1614,
                    metric_7: 0.3491,
                    metric_8: 0.9735
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the truck driving on the bridge.",
            targetPrompt: "An inbound train travels along a snowy track, with a empty bridge visible in the background. The camera pans from left to right, capturing the scene.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.1901,
                    metric_2: 0.236,
                    metric_3: 0.87,
                    metric_4: 0.8608,
                    metric_5: 0.6109,
                    metric_6: 0.4761,
                    metric_7: 0.7163,
                    metric_8: 0.9775
                },
                method2: {
                    metric_1: 26.0614,
                    metric_2: 0.2352,
                    metric_3: 0.8495,
                    metric_4: 0.9101,
                    metric_5: 0.5809,
                    metric_6: 0.388,
                    metric_7: 0.7417,
                    metric_8: 0.9915
                },
                method3: {
                    metric_1: 13.99,
                    metric_2: 0.0711,
                    metric_3: 0.4681,
                    metric_4: 0.7365,
                    metric_5: 0.2021,
                    metric_6: 0.147,
                    metric_7: 0.2258,
                    metric_8: 0.9777
                },
                method4: {
                    metric_1: 28.6987,
                    metric_2: 0.2487,
                    metric_3: 0.7516,
                    metric_4: 0.7347,
                    metric_5: 0.3995,
                    metric_6: 0.2706,
                    metric_7: 0.4626,
                    metric_8: 0.9733
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a desert track not snowy track.",
            targetPrompt: "An inbound train travels along a desert track, with a bridge visible in the background where a truck is driving. The camera pans from left to right, capturing the scene.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 23.9026,
                    metric_2: 0.167,
                    metric_3: 0.8444,
                    metric_4: 0.8371,
                    metric_5: 0.524,
                    metric_6: 0.4525,
                    metric_7: 0.6719,
                    metric_8: 0.9779
                },
                method2: {
                    metric_1: 26.3521,
                    metric_2: 0.211,
                    metric_3: 0.8652,
                    metric_4: 0.8595,
                    metric_5: 0.5651,
                    metric_6: 0.3713,
                    metric_7: 0.6738,
                    metric_8: 0.9914
                },
                method3: {
                    metric_1: 20.6043,
                    metric_2: 0.0978,
                    metric_3: 0.3971,
                    metric_4: 0.4419,
                    metric_5: 0.7755,
                    metric_6: 0.5118,
                    metric_7: 0.8047,
                    metric_8: 0.9432
                },
                method4: {
                    metric_1: 27.2441,
                    metric_2: 0.2544,
                    metric_3: 0.7419,
                    metric_4: 0.7206,
                    metric_5: 0.3523,
                    metric_6: 0.2155,
                    metric_7: 0.3958,
                    metric_8: 0.9741
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a realistic wildlife documentary style.",
            targetPrompt: "An inbound train travels along a snowy track, with a bridge visible in the background where a truck is driving. The camera pans from left to right, capturing the scene depicted in a realistic wildlife documentary style.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0007/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0007/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0007/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0007/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.1889,
                    metric_2: 0.2183,
                    metric_3: 0.8485,
                    metric_4: 0.8623,
                    metric_5: 0.5594,
                    metric_6: 0.4367,
                    metric_7: 0.6899,
                    metric_8: 0.9786
                },
                method2: {
                    metric_1: 24.6151,
                    metric_2: 0.2064,
                    metric_3: 0.8454,
                    metric_4: 0.8523,
                    metric_5: 0.4929,
                    metric_6: 0.382,
                    metric_7: 0.5991,
                    metric_8: 0.9924
                },
                method3: {
                    metric_1: 21.1485,
                    metric_2: 0.1087,
                    metric_3: 0.8097,
                    metric_4: 0.7371,
                    metric_5: 0.5581,
                    metric_6: 0.5531,
                    metric_7: 0.6572,
                    metric_8: 0.9602
                },
                method4: {
                    metric_1: 28.2347,
                    metric_2: 0.2307,
                    metric_3: 0.7379,
                    metric_4: 0.7452,
                    metric_5: 0.3568,
                    metric_6: 0.2425,
                    metric_7: 0.4507,
                    metric_8: 0.9746
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/vehicle_0011/input.mp4",
    category: "Vehicle",
    originalCaption: "A motorcyclist with helmet is riding a dirt bike and performing stunts in a motocross track. The video is in slow motion.",
    editTypes: {
        'motion-change': {
            editPrompt: "Make the motorcyclist jumping off a ramp.",
            targetPrompt: "A motorcyclist with a helmet is riding a dirt bike and performing stunts in a motocross track, including jumping off a ramp, all captured in slow motion.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9391,
                    metric_2: 0.2267,
                    metric_3: 0.8467,
                    metric_4: 0.693,
                    metric_5: 0.6401,
                    metric_6: 0.3941,
                    metric_7: 0.7168,
                    metric_8: 0.9776
                },
                method2: {
                    metric_1: 28.3471,
                    metric_2: 0.2702,
                    metric_3: 0.858,
                    metric_4: 0.7302,
                    metric_5: 0.6595,
                    metric_6: 0.4164,
                    metric_7: 0.71,
                    metric_8: 0.978
                },
                method3: {
                    metric_1: 25.0309,
                    metric_2: 0.2122,
                    metric_3: 0.7617,
                    metric_4: 0.4073,
                    metric_5: 0.802,
                    metric_6: 0.57,
                    metric_7: 0.8252,
                    metric_8: 0.897
                },
                method4: {
                    metric_1: 26.4038,
                    metric_2: 0.2705,
                    metric_3: 0.7733,
                    metric_4: 0.6194,
                    metric_5: 0.5086,
                    metric_6: 0.309,
                    metric_7: 0.6426,
                    metric_8: 0.9675
                }
            }
        },
        'object-change': {
            editPrompt: "Change the motorcyclist to a BMX rider.",
            targetPrompt: "A BMX rider with a helmet is performing stunts on a dirt bike at a motocross track, and the video is in slow motion.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.9941,
                    metric_2: 0.2138,
                    metric_3: 0.8509,
                    metric_4: 0.6914,
                    metric_5: 0.5261,
                    metric_6: 0.3261,
                    metric_7: 0.6079,
                    metric_8: 0.9831
                },
                method2: {
                    metric_1: 26.61,
                    metric_2: 0.2292,
                    metric_3: 0.7758,
                    metric_4: 0.738,
                    metric_5: 0.6901,
                    metric_6: 0.4575,
                    metric_7: 0.7354,
                    metric_8: 0.976
                },
                method3: {
                    metric_1: 22.8706,
                    metric_2: 0.1979,
                    metric_3: 0.7553,
                    metric_4: 0.4712,
                    metric_5: 0.8487,
                    metric_6: 0.8167,
                    metric_7: 0.936,
                    metric_8: 0.9064
                },
                method4: {
                    metric_1: 26.1737,
                    metric_2: 0.2559,
                    metric_3: 0.787,
                    metric_4: 0.6026,
                    metric_5: 0.5654,
                    metric_6: 0.3482,
                    metric_7: 0.6738,
                    metric_8: 0.967
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a cheering crowd in the background.",
            targetPrompt: "A motorcyclist with a helmet is riding a dirt bike and performing stunts in a motocross track in slow motion, with a cheering crowd in the background.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.0807,
                    metric_2: 0.2434,
                    metric_3: 0.847,
                    metric_4: 0.6911,
                    metric_5: 0.6578,
                    metric_6: 0.3969,
                    metric_7: 0.729,
                    metric_8: 0.9695
                },
                method2: {
                    metric_1: 27.7073,
                    metric_2: 0.2594,
                    metric_3: 0.8569,
                    metric_4: 0.6869,
                    metric_5: 0.5084,
                    metric_6: 0.2745,
                    metric_7: 0.7065,
                    metric_8: 0.9677
                },
                method3: {
                    metric_1: 14.9248,
                    metric_2: 0.1056,
                    metric_3: 0.7509,
                    metric_4: 0.4016,
                    metric_5: 0.4203,
                    metric_6: 0.428,
                    metric_7: 0.5361,
                    metric_8: 0.9143
                },
                method4: {
                    metric_1: 29.782,
                    metric_2: 0.2722,
                    metric_3: 0.8038,
                    metric_4: 0.6043,
                    metric_5: 0.3256,
                    metric_6: 0.19,
                    metric_7: 0.4404,
                    metric_8: 0.9597
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the helmet.",
            targetPrompt: "A motorcyclist without a helmet is performing stunts on a motocross track in slow motion.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 27.8988,
                    metric_2: 0.2268,
                    metric_3: 0.832,
                    metric_4: 0.6896,
                    metric_5: 0.5894,
                    metric_6: 0.3787,
                    metric_7: 0.7061,
                    metric_8: 0.9806
                },
                method2: {
                    metric_1: 27.8362,
                    metric_2: 0.2412,
                    metric_3: 0.8774,
                    metric_4: 0.793,
                    metric_5: 0.5337,
                    metric_6: 0.3026,
                    metric_7: 0.6772,
                    metric_8: 0.9766
                },
                method3: {
                    metric_1: 25.8564,
                    metric_2: 0.205,
                    metric_3: 0.7424,
                    metric_4: 0.7047,
                    metric_5: 0.4472,
                    metric_6: 0.22,
                    metric_7: 0.5107,
                    metric_8: 0.9548
                },
                method4: {
                    metric_1: 28.6066,
                    metric_2: 0.223,
                    metric_3: 0.7588,
                    metric_4: 0.6079,
                    metric_5: 0.4913,
                    metric_6: 0.2908,
                    metric_7: 0.6187,
                    metric_8: 0.9705
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a snowy trail.",
            targetPrompt: "A motorcyclist with a helmet is riding a dirt bike and performing stunts on a forest trail, with the video shown in slow motion.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 28.6765,
                    metric_2: 0.2173,
                    metric_3: 0.828,
                    metric_4: 0.4818,
                    metric_5: 0.4865,
                    metric_6: 0.2311,
                    metric_7: 0.5269,
                    metric_8: 0.9349
                },
                method2: {
                    metric_1: 25.4582,
                    metric_2: 0.1967,
                    metric_3: 0.8331,
                    metric_4: 0.6899,
                    metric_5: 0.5257,
                    metric_6: 0.3075,
                    metric_7: 0.6875,
                    metric_8: 0.9669
                },
                method3: {
                    metric_1: 24.8793,
                    metric_2: 0.1755,
                    metric_3: 0.8383,
                    metric_4: 0.5792,
                    metric_5: 0.4838,
                    metric_6: 0.3295,
                    metric_7: 0.6641,
                    metric_8: 0.9552
                },
                method4: {
                    metric_1: 27.7243,
                    metric_2: 0.2447,
                    metric_3: 0.8153,
                    metric_4: 0.5894,
                    metric_5: 0.4356,
                    metric_6: 0.2295,
                    metric_7: 0.501,
                    metric_8: 0.9587
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a realistic wildlife documentary style.",
            targetPrompt: "Render the scene of a motorcyclist with a helmet is riding a dirt bike and performing stunts in a motocross track The video is in slow motion, in a realistic wildlife documentary style.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0011/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0011/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0011/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0011/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.3628,
                    metric_2: 0.1969,
                    metric_3: 0.8377,
                    metric_4: 0.6947,
                    metric_5: 0.5307,
                    metric_6: 0.3576,
                    metric_7: 0.6777,
                    metric_8: 0.9818
                },
                method2: {
                    metric_1: 25.7424,
                    metric_2: 0.2084,
                    metric_3: 0.8739,
                    metric_4: 0.719,
                    metric_5: 0.4252,
                    metric_6: 0.2423,
                    metric_7: 0.6504,
                    metric_8: 0.9757
                },
                method3: {
                    metric_1: 28.4102,
                    metric_2: 0.2095,
                    metric_3: 0.7734,
                    metric_4: 0.6775,
                    metric_5: 0.3899,
                    metric_6: 0.3251,
                    metric_7: 0.4863,
                    metric_8: 0.9675
                },
                method4: {
                    metric_1: 28.6762,
                    metric_2: 0.2389,
                    metric_3: 0.7708,
                    metric_4: 0.6346,
                    metric_5: 0.4257,
                    metric_6: 0.2987,
                    metric_7: 0.5552,
                    metric_8: 0.9598
                }
            }
        }
    }
},
{
    originalVideo: "VEditBench-Long/vehicle_0017/input.mp4",
    category: "Vehicle",
    originalCaption: "At night, from the perspective of a stationary camera, we see an ambulance moving along the road with additional vehicles moving on the road.",
    editTypes: {
        'motion-change': {
            editPrompt: "Later, its seen that the ambulance is stuck in traffic admist other vehicles.",
            targetPrompt: "At night, from the perspective of a stationary camera, we see an ambulance moving a little on the road but stuck in traffic admist other vehicles.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/motion_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/motion_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/motion_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/motion_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.2839,
                    metric_2: 0.2381,
                    metric_3: 0.7675,
                    metric_4: 0.7526,
                    metric_5: 0.4002,
                    metric_6: 0.2275,
                    metric_7: 0.542,
                    metric_8: 0.9411
                },
                method2: {
                    metric_1: 24.8524,
                    metric_2: 0.2249,
                    metric_3: 0.8151,
                    metric_4: 0.9371,
                    metric_5: 0.4664,
                    metric_6: 0.2611,
                    metric_7: 0.584,
                    metric_8: 0.9826
                },
                method3: {
                    metric_1: 24.4172,
                    metric_2: 0.2068,
                    metric_3: 0.7947,
                    metric_4: 0.5252,
                    metric_5: 0.1824,
                    metric_6: 0.4665,
                    metric_7: 0.4756,
                    metric_8: 0.892
                },
                method4: {
                    metric_1: 25.967,
                    metric_2: 0.2644,
                    metric_3: 0.6994,
                    metric_4: 0.6429,
                    metric_5: 0.1194,
                    metric_6: 0.1199,
                    metric_7: 0.2515,
                    metric_8: 0.9692
                }
            }
        },
        'object-change': {
            editPrompt: "Change the ambulance to a fire truck.",
            targetPrompt: "At night, from the perspective of a stationary camera, we see a firet ruck moving along the road with additional vehicles moving on the road.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/object_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/object_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/object_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/object_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 25.1631,
                    metric_2: 0.223,
                    metric_3: 0.7665,
                    metric_4: 0.7415,
                    metric_5: 0.4146,
                    metric_6: 0.2336,
                    metric_7: 0.5234,
                    metric_8: 0.9524
                },
                method2: {
                    metric_1: 23.2082,
                    metric_2: 0.1825,
                    metric_3: 0.8691,
                    metric_4: 0.7413,
                    metric_5: 0.4627,
                    metric_6: 0.2993,
                    metric_7: 0.6069,
                    metric_8: 0.9802
                },
                method3: {
                    metric_1: 23.4332,
                    metric_2: 0.1904,
                    metric_3: 0.7625,
                    metric_4: 0.6295,
                    metric_5: 0.7175,
                    metric_6: 0.6733,
                    metric_7: 0.8306,
                    metric_8: 0.9187
                },
                method4: {
                    metric_1: 26.4238,
                    metric_2: 0.2057,
                    metric_3: 0.6734,
                    metric_4: 0.6515,
                    metric_5: 0.0497,
                    metric_6: 0.1019,
                    metric_7: 0.1996,
                    metric_8: 0.9745
                }
            }
        },
        'object-insertion': {
            editPrompt: "Add a firetruck following ambulance.",
            targetPrompt: "At night, from the perspective of a stationary camera, we see an ambulance moving along the road with a firetruck following it, and additional vehicles moving along the road too.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/object_insertion/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/object_insertion/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/object_insertion/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/object_insertion/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 26.0127,
                    metric_2: 0.2525,
                    metric_3: 0.7304,
                    metric_4: 0.7206,
                    metric_5: 0.4511,
                    metric_6: 0.2777,
                    metric_7: 0.6006,
                    metric_8: 0.9473
                },
                method2: {
                    metric_1: 26.6079,
                    metric_2: 0.2535,
                    metric_3: 0.8238,
                    metric_4: 0.8281,
                    metric_5: 0.5297,
                    metric_6: 0.3636,
                    metric_7: 0.6768,
                    metric_8: 0.9757
                },
                method3: {
                    metric_1: 26.5864,
                    metric_2: 0.2077,
                    metric_3: 0.8861,
                    metric_4: 0.6809,
                    metric_5: 0.7758,
                    metric_6: 0.7192,
                    metric_7: 0.8979,
                    metric_8: 0.898
                },
                method4: {
                    metric_1: 27.4879,
                    metric_2: 0.2733,
                    metric_3: 0.7186,
                    metric_4: 0.6392,
                    metric_5: 0.1999,
                    metric_6: 0.1471,
                    metric_7: 0.3977,
                    metric_8: 0.9709
                }
            }
        },
        'object-removal': {
            editPrompt: "Remove the ambulance.",
            targetPrompt: "At night, from the perspective of a stationary camera, we see additional vehicles moving on the road.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/object_removal/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/object_removal/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/object_removal/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/object_removal/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 22.3299,
                    metric_2: 0.2052,
                    metric_3: 0.804,
                    metric_4: 0.7789,
                    metric_5: 0.3478,
                    metric_6: 0.1767,
                    metric_7: 0.4929,
                    metric_8: 0.9492
                },
                method2: {
                    metric_1: 21.2439,
                    metric_2: 0.1605,
                    metric_3: 0.7889,
                    metric_4: 0.941,
                    metric_5: 0.459,
                    metric_6: 0.2589,
                    metric_7: 0.5674,
                    metric_8: 0.9828
                },
                method3: {
                    metric_1: 24.553,
                    metric_2: 0.1594,
                    metric_3: 0.7743,
                    metric_4: 0.7812,
                    metric_5: 0.2197,
                    metric_6: 0.3719,
                    metric_7: 0.5049,
                    metric_8: 0.9307
                },
                method4: {
                    metric_1: 27.1434,
                    metric_2: 0.2504,
                    metric_3: 0.7007,
                    metric_4: 0.6581,
                    metric_5: 0.0634,
                    metric_6: 0.1019,
                    metric_7: 0.2003,
                    metric_8: 0.9745
                }
            }
        },
        'scene-change': {
            editPrompt: "Make it in a rural village.",
            targetPrompt: "At night, from the perspective of a stationary camera, in a rural village we see an ambulance moving along the road with additional vehicles moving on the road.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/scene_change/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/scene_change/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/scene_change/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/scene_change/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 24.7941,
                    metric_2: 0.248,
                    metric_3: 0.8002,
                    metric_4: 0.7545,
                    metric_5: 0.4142,
                    metric_6: 0.2274,
                    metric_7: 0.5366,
                    metric_8: 0.9502
                },
                method2: {
                    metric_1: 27.7195,
                    metric_2: 0.2362,
                    metric_3: 0.838,
                    metric_4: 0.823,
                    metric_5: 0.3668,
                    metric_6: 0.2253,
                    metric_7: 0.5508,
                    metric_8: 0.9809
                },
                method3: {
                    metric_1: 18.4221,
                    metric_2: 0.093,
                    metric_3: 0.7662,
                    metric_4: 0.5568,
                    metric_5: 0.7074,
                    metric_6: 0.7238,
                    metric_7: 0.7954,
                    metric_8: 0.932
                },
                method4: {
                    metric_1: 25.519,
                    metric_2: 0.2206,
                    metric_3: 0.6609,
                    metric_4: 0.6079,
                    metric_5: 0.0749,
                    metric_6: 0.1129,
                    metric_7: 0.2445,
                    metric_8: 0.974
                }
            }
        },
        stylization: {
            editPrompt: "Render the scene in a black-and-white photograph style.",
            targetPrompt: "Render a scene that at night, from the perspective of a stationary camera, we see an ambulance moving along the road with additional vehicles moving on the road in a black-and-white photograph style.",
            resultVideos: {
                method1: "VEditBench-Long/vehicle_0017/stylization/VidToMe.mp4",
                method2: "VEditBench-Long/vehicle_0017/stylization/instruct-video-to-video.mp4",
                method3: "VEditBench-Long/vehicle_0017/stylization/Text2Video-Zero.mp4",
                method4: "VEditBench-Long/vehicle_0017/stylization/pix2video.mp4"
            },
            metrics: {
                method1: {
                    metric_1: 30.8289,
                    metric_2: 0.2205,
                    metric_3: 0.7239,
                    metric_4: 0.7788,
                    metric_5: 0.2903,
                    metric_6: 0.2286,
                    metric_7: 0.4453,
                    metric_8: 0.9403
                },
                method2: {
                    metric_1: 31.4569,
                    metric_2: 0.2201,
                    metric_3: 0.8658,
                    metric_4: 0.8747,
                    metric_5: 0.3581,
                    metric_6: 0.2807,
                    metric_7: 0.4993,
                    metric_8: 0.9819
                },
                method3: {
                    metric_1: 32.7781,
                    metric_2: 0.2123,
                    metric_3: 0.8563,
                    metric_4: 0.8197,
                    metric_5: 0.3219,
                    metric_6: 0.3238,
                    metric_7: 0.5029,
                    metric_8: 0.9235
                },
                method4: {
                    metric_1: 36.4283,
                    metric_2: 0.2429,
                    metric_3: 0.6929,
                    metric_4: 0.6562,
                    metric_5: 0.1799,
                    metric_6: 0.2658,
                    metric_7: 0.3762,
                    metric_8: 0.9665
                }
            }
        }
    }
}
];
window.longVideoDemoData = longVideoDemoData;
