import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Image, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from '../styles';
import star from '../assets/star.png';

interface Props {
    review: {
        name: string;
        text: string;
        user: {
            name: string;
        }
    }
}

const ReviewCard: React.FC<Props> =  ({review}) => {
    return (
        <View style={theme.reviewCardContainer}>
            <View style={theme.reviewUserGroup}>
                <Image source={star} />
                <Text style={text.reviewUsername}>{review.user.name}</Text>
            </View>
            <Text style={theme.reviewText}>
                {review.text}
            </Text>
        </View>
    );
};

export default ReviewCard;